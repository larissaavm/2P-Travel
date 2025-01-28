from flask import Flask, request, jsonify
from flask_cors import CORS
import openai  # Substitua por outra biblioteca, se necessário

# Inicialização do Flask
app = Flask(__name__)
CORS(app)

# Configuração da OpenAI (substitua pela chave de API correta)
openai.api_key = ""

@app.route('/buscar-viagens', methods=['POST'])
def buscar_viagens():
    try:
        # Obtém os dados enviados pelo React
        dados = request.json
        origem = dados.get('origem')
        data_viagem = dados.get('data_viagem')
        data_retorno = dados.get('data_retorno')
        tipo_destino = dados.get('tipo_destino')
        qtd_adultos = dados.get('quantidade_adultos', 1)
        qtd_criancas = dados.get('quantidade_criancas', 0)
        pets = dados.get('pets', False)
        valor_estimado = dados.get('valor_estimado', 0.0)

        # Cria um prompt para a GenAI
        prompt = f"""
        Quero opções de viagem que atendam às seguintes condições:
        Origem: {origem}
        Data de viagem: {data_viagem}
        Data de retorno: {data_retorno}
        Tipo de destino: {tipo_destino}
        Quantidade de adultos: {qtd_adultos}
        Quantidade de crianças: {qtd_criancas}
        Levar pets: {"Sim" if pets else "Não"}
        Valor estimado total: R$ {valor_estimado:.2f}
        Transporte: Carro ou Avião (carro até 100km)
        Perfil: Sofisticado

        Considere que o valor tem que atender o valor estimado somando: 
        O valor do transporte
        Hospedagem: valor e avaliação
        Possiveis Atividades disponíveis proximas
        
        Retorne as 3 melhores opções de acordo com a avaliação do Google. No formato abaixo:
        - Link do Hotel e estimativa de valores para o período
        - Transporte: se for carro, calcular valor do preço do combústivel médio atual e pedagios. Se for avião, incluir valores das passagens aereas
        - Listar possíveis atividades
        """
        
        # Esquema JSON esperado
        function_schema = {
            "name": "travel_package_options",
            "description": "Provides various travel package options detailing accommodation, transport, and included activities.",
            "parameters": {
                "type": "object",
                "properties": {
                    "options": {
                        "type": "array",
                        "description": "List of travel package options",
                        "items": {
                            "type": "object",
                            "properties": {
                                "hospedagem": {
                                    "type": "string",
                                    "description": "Details about the accommodation."
                                },
                                "trasporte": {
                                    "type": "string",
                                    "description": "Details about the transport options."
                                },
                                "atividades": {
                                    "type": "string",
                                    "description": "Details about the activities included."
                                }
                            },
                            "required": ["hospedagem", "trasporte", "atividades"],
                            "additionalProperties": False
                        }
                    }
                },
                "required": ["options"],
                "additionalProperties": False
            }
        }

        # Chamada à API da GenAI
        response = openai.ChatCompletion.create(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=1000,
            functions=[function_schema],  # Incluindo o esquema JSON
            function_call={"name": "travel_package_options"} 
        )

        # Extrai a resposta da GenAI
        opcoes_viagem = (response["choices"][0]["message"]["function_call"]["arguments"])
        #opcoes_viagem = response['choices'][0]['message']['content'].strip()  # Acessando corretamente a resposta

        # Retorna a resposta como JSON
        return jsonify({"opcoes": opcoes_viagem}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
