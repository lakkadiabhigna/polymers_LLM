Mankind has always been known by advancements in materials; for example from stone age to the silicon age! This 
significance is too well known if one observes the chips driving the current AI revolution: GPU. Not all materials are 
made from the traditional metals and alloys nor using the traditional manufacturing techniques. The need of the coming 
times is engineering (new) materials as required (in contrast to engineering of existing materials) based on need. For 
example, a bio-degradable material for holding water in a bottle, fuel for automobiles (green hydrogen) etc.
**The goal of this project is to fine-tune LLM for discovering / designing advanced, custom new materials.** A MERN-stack 
based UI might be necessary to test the above LLM. 

The steps for realizing this project would include:

1) Identifying the LLM to be fine-tuned with materials data. 
2) Download datasets and pick the relevant subset to be used for fine-tuning. 
3) Fine-tune the LLM.
4) Develop test cases for verifying the LLM.
5) Develop a MERN-stack based UI to implement the above test cases.

To bring this vision to life, we fine-tuned a pre-trained Large Language Model (LLM) using a carefully curated dataset of polymers and their glass transition temperatures (Tg). The objective was to enable the model to predict Tg values when given a polymer name or suggest suitable polymer alternatives with similar thermal behavior. The model learns from text-based data, allowing it to process material science information in a language-like format.

Once the model was fine-tuned and validated, we built a MERN-stack (MongoDB, Express.js, React.js, Node.js) based web interface to allow easy interaction. Through this UI, users can enter a polymer name and instantly receive its predicted Tg value or a recommendation for another polymer with comparable properties. This integration provides a smooth pipeline from AI-based material understanding to practical, usable insights.

The project illustrates how AI, when combined with domain-specific datasets, can support the intelligent discovery of new materials tailored for real-world needs — from biodegradable packaging to temperature-resilient components. It reflects a step toward faster, more targeted materials research by minimizing manual experimentation and empowering researchers with intelligent suggestions at the click of a button.
