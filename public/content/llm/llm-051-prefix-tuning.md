# Prefix Tuning：前缀微调的高效参数优化

Prefix Tuning通过在模型输入前添加可训练的虚拟前缀向量，在不修改原始模型参数的情况下实现任务适配，是一种优雅的高效微调方法。

## Prefix Tuning的基本原理

Prefix Tuning由斯坦福大学和Google Research在2021年提出，是一种参数高效的微调方法。与LoRA修改权重矩阵不同，Prefix Tuning在模型的每一层注意力机制中注入可训练的"前缀"（Prefix）向量。这些前缀向量作为额外的Key和Value，与正常的注意力输入拼接在一起，引导模型关注与当前任务相关的信息。

Prefix Tuning的核心优势在于完全保留原始模型的参数，仅训练前缀向量。对于一个10B参数的模型，Prefix Tuning仅需要训练约0.1%的参数。更重要的是，前缀向量的长度可以灵活调整——更长的前缀提供更强的表达能力，但也需要更多的显存。实践中，前缀长度通常设置为100到200个token。

## Prefix Tuning vs LoRA

Prefix Tuning和LoRA是目前最流行的两种PEFT方法，它们各有优劣。Prefix Tuning的优势在于不修改模型权重，理论上可以更好地保留预训练知识。但Prefix Tuning的一个已知问题是训练不稳定，因为前缀向量在训练初期可能产生较大的梯度波动。

LoRA在实践中通常表现更稳定，效果也更可预测。LoRA的参数量与秩r线性相关，而Prefix Tuning的参数量与前缀长度和层数相关。在大多数场景下，LoRA是更推荐的选择。但Prefix Tuning在某些生成任务（如对话生成、摘要）中表现优异，特别是当需要保持模型原有风格时。

## Prefix Tuning的改进与应用

为解决训练不稳定的问题，研究者提出了多种改进方案。P-Tuning v2将Prefix Tuning扩展到模型的每一层（而非仅注意力层），并引入了深度优化策略。P-Tuning v2在理解类任务（如序列标注、分类）上显著优于原始Prefix Tuning，缩小了与全参数微调的差距。

Prefix Tuning在多任务场景中具有独特优势。由于不同任务可以使用不同的前缀向量，而共享同一个基础模型，因此可以在推理时根据任务动态切换前缀。这一特性类似于LoRA的适配器切换，但实现方式不同。在对话系统中，Prefix Tuning被用于控制对话风格和角色设定，实现一个模型服务多种对话场景。

## 总结

Prefix Tuning通过注入可训练的前缀向量实现高效微调，完全保留原始模型参数。虽然训练稳定性不如LoRA，但在生成任务和多任务场景中具有独特优势，P-Tuning v2进一步提升了其性能。

## 参考来源

- https://arxiv.org/abs/2101.00190
- https://arxiv.org/abs/2110.07602
- https://github.com/THUDM/P-tuning-v2
