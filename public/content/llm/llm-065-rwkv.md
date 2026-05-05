# RWKV：RNN与Transformer融合的开源架构

RWKV（Receptance Weighted Key Value）是一种将RNN的推理效率与Transformer的训练并行性结合的模型架构，在开源社区获得广泛关注。

## 引言

RWKV是由Bo Peng发起的开源项目，提出了一种名为Receptance Weighted Key Value（RWKV）的新型注意力机制。RWKV的核心创新在于将Transformer风格的注意力公式改写为RNN形式，使得模型在训练时可以像Transformer一样并行处理序列，在推理时又像RNN一样逐token生成，无需KV缓存。

## 架构设计

RWKV的关键技术是将标准自注意力中的Q、K、V矩阵替换为R（Receptance）、W（Weight）、K（Key）、V（Value）四个矩阵。其中R控制当前token对历史信息的接收程度，W是位置相关的衰减因子。通过数学上的等价变换，RWKV将注意力计算转化为递推形式。这种设计带来了两个关键优势：训练时可以像Transformer一样并行处理整个序列；推理时只需要维护一个固定大小的隐状态，内存占用为常数级别。

## 模型演进与性能

RWKV经历了多个版本的迭代。RWKV-4（2023年）在7B参数规模上展现了与Llama-7B相当的语言建模能力。RWKV-5（2024年）引入了更多改进。RWKV-6（Eagle）和RWKV-7进一步提升了性能。在多语言能力方面，RWKV-6在中文、英文、日文等多种语言上展现了良好的表现。在World模型任务上，RWKV展现了独特的优势，因为其RNN式的递推特性天然适合模拟动态环境。

## 开源生态与未来

RWKV是完全开源的项目，采用Apache 2.0许可证。社区活跃度高，已有数百名贡献者。RWKV的推理框架支持多种部署方式，包括llama.cpp、MLC-LLM等。在边缘设备上，RWKV的恒定内存占用使其成为理想的部署选择。RWKV的局限性在于超大规模下的性能追赶Transformer仍有差距。尽管如此，RWKV证明了非Transformer架构在语言建模上的可行性。

## 总结

RWKV（Receptance Weighted Key Value）是一种将RNN的推理效率与Transformer的训练并行性结合的模型架构，在开源社区获得广泛关注。

## 参考来源

- https://arxiv.org/abs/2305.13048
- https://github.com/RWKV/RWKV-LM
- https://arxiv.org/abs/2307.08631

