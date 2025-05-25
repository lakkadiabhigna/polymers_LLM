# perfect

from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"], methods=["POST", "OPTIONS"], allow_headers=["Content-Type"])

# Load the fine-tuned model and tokenizer
model_path = r"C:\Users\GCET\Downloads\merged-model"
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForCausalLM.from_pretrained(
    model_path,
    torch_dtype=torch.float16,
    device_map="auto"
)

@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return jsonify({"message": "CORS preflight passed"}), 200

    data = request.get_json()
    instruction = data.get("input", "").strip()

    if not instruction:
        return jsonify({"error": "No input provided"}), 400

    # Use the same prompt format as fine-tuning
    input_text = f"### Instruction:\n{instruction}\n\n### Response:\n"
    inputs = tokenizer(input_text, return_tensors="pt").to(model.device)

    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=50,
            do_sample=True,
            top_p=0.9,
            temperature=0.7
        )

    result = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Extract only the response portion
    if input_text in result:
        result = result.split(input_text)[-1].strip()
    else:
        result = result.strip()

    # Extract temperature if possible
    match = re.search(r"-?\d+(\.\d+)?\s?°?\s?[cC]", result)
    temperature = match.group() if match else result

    return jsonify({"output": temperature})

if __name__ == "__main__":
    app.run(debug=True, port=5001)


