# 张量并行：GPU节点内的高效矩阵分割

张量并行通过将矩阵运算分割到多个GPU上实现节点内的高效并行，是Megatron-LM的核心技术。

## 引言

张量并行（Tensor Parallelism, TP）是由NVIDIA提出的模型并行方法，通过将模型中单个层的矩阵运算分割到多个GPU上执行，实现节点内的高效并行。张量并行是Megatron-LM框架的核心技术，被广泛用于GPT-3、Llama等大模型的训练。

## 列并行与行并行

张量并行的基本操作是将矩阵乘法分割。以自注意力层为例，Q、K、V的投影矩阵可以按列分割（Column Parallelism），输出投影矩阵则按行分割（Row Parallelism）。对于MLP层，同样可以采用列并行+行并行的组合。这种设计确保了每个GPU的计算量大致相同，且只需要一次All-Reduce通信。

## 通信优化

张量并行的通信主要是All-Reduce操作，发生在每个注意力层和MLP层之后。在节点内，NVIDIA的NVLink提供了600GB/s的双向带宽，使得All-Reduce的延迟非常低。这也是张量并行通常限制在单个节点内的原因。跨节点使用张量并行时，通信需要经过InfiniBand或以太网，带宽远低于NVLink，效率会显著下降。

## 实践建议

张量并行的配置通常取决于硬件：单节点8卡GPU时，TP=8是最常见的配置。对于更大的模型，可以采用TP=4或TP=2，结合流水线并行和数据并行。Megatron-LM、DeepSpeed和PyTorch的DistributedTensorParallel均支持张量并行。在配置时需要注意确保每个GPU的显存足以容纳分配给它的模型部分。

## 总结

张量并行通过将矩阵运算分割到多个GPU上实现节点内的高效并行，是Megatron-LM的核心技术。

## 参考来源

- https://arxiv.org/abs/2104.04473
- https://github.com/NVIDIA/Megatron-LM
- https://developer.nvidia.com/gpudirect

