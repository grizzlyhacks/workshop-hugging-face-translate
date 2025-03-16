import { client } from "@gradio/client";

const app = await client("https://gradio-tests-english-to-spanish.hf.space/");
const result = await app.predict("/predict", [		
				"Howdy!", // string  in 'text' Textbox component
	]);

console.log(result.data);
