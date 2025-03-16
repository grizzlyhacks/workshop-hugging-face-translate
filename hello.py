from gradio_client import Client

client = Client("https://gradio-tests-english-to-spanish.hf.space/")
result = client.predict(
				"Howdy!",	# str in 'text' Textbox component
				api_name="/predict"
)
print(result)
