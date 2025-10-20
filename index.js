import { client } from "@gradio/client";

const app = await client("gradio-tests-old/english_to_spanish");
const result = await app.predict("/predict", [		
				"Howdy!", // string  in 'text' Textbox component
	]);

console.log(result.data);
