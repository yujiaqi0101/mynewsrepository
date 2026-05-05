# P-Tuning v2：深度前缀微调的全面升级

P-Tuning v2是Prefix Tuning的全面升级版本，通过在每一层添加前缀并优化训练策略，在理解和生成任务上都达到了接近全参数微调的性能。

## 从P-Tuning到P-Tuning v2

P-Tuning v2由清华大学KEG实验室提出，是对Prefix Tuning的系统性改进。原始的P-Tuning仅在模型的输入层添加连续提示（Continuous Prompts），主要用于生成任务。P-Tuning v2则将连续提示扩展到模型的每一层，使其同时适用于理解和生成任务。

P-Tuning v2的关键改进包括：多层前缀注入（每一层Transformer都有独立的前缀参数）、优化的前缀初始化（使用预训练模型的词嵌入作为初始化）、重参数化（使用MLP重参数化前缀以提升训练稳定性）和任务特定的前缀长度（不同任务使用不同长度的前缀）。这些改进使得P-Tuning v2在参数效率上保持优势的同时，大幅提升了性能。

## P-Tuning v2的性能评估

在GLM-130B和LLaMA等模型上的实验表明，P-Tuning v2在多种任务上接近全参数微调的性能。在序列标注任务（如NER、POS标注）上，P-Tuning v2与全参数微调的差距在1%以内。在分类任务上，P-Tuning v2甚至在一些数据集上超越了全参数微调，这可能归功于正则化效果。

P-Tuning v2特别适合参数量较大的模型。在130B参数的模型上，P-Tuning v2训练的参数量仅为全参数微调的0.1%，但性能差距不超过2%。这一特性使得P-Tuning v2成为在有限资源下微调超大模型的理想选择。清华大学在ChatGLM系列模型中采用了P-Tuning v2作为推荐的微调方法。

## P-Tuning v2的实践指南

使用P-Tuning v2进行微调需要配置几个关键参数：前缀长度（prefix_length）、前缀层数（num_layers）和重参数化维度（encoder_hidden_size）。推荐的前缀长度为128，重参数化维度为768。在训练策略上，建议使用较小的学习率（1e-4到3e-4）和较长的训练步数。

ChatGLM-6B和ChatGLM2-6B提供了P-Tuning v2的官方实现，支持在单张消费级GPU上进行微调。此外，Hugging Face的PEFT库也提供了P-Tuning v2（称为Prompt Tuning）的支持。在实际应用中，P-Tuning v2已被广泛用于中文NLP任务的模型定制，包括信息抽取、文本分类和对话生成等。

## 总结

P-Tuning v2通过多层前缀注入和优化训练策略，在理解和生成任务上都达到了接近全参数微调的性能。作为ChatGLM系列的推荐微调方法，P-Tuning v2在中文NLP领域得到了广泛应用。

## 参考来源

- https://arxiv.org/abs/2110.07602
- https://github.com/THUDM/ChatGLM-6B
- https://github.com/THUDM/P-tuning-v2
