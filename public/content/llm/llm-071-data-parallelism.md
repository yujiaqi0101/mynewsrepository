# 数据并行与ZeRO：大模型训练的显存优化

数据并行是最基础的并行策略，ZeRO优化通过消除冗余大幅降低显存占用，使大模型训练成为可能。

## 引言

数据并行（Data Parallelism, DP）是分布式训练中最基础也最常用的策略：每个GPU持有完整的模型副本，处理不同的数据子集，然后通过梯度同步更新模型。ZeRO（Zero Redundancy Optimizer）通过消除冗余解决了显存问题。

## 标准数据并行

在标准数据并行中，每个GPU执行前向传播、反向传播、All-Reduce同步梯度和更新参数。每个GPU都需要存储模型参数（FP16）、模型参数副本（FP32）、梯度和优化器状态。以175B参数的模型为例，总显存需求超过1.4TB，即使使用8张A100（80GB），单卡也无法容纳。

## ZeRO三个阶段

ZeRO由微软提出，分三个阶段逐步消除冗余：ZeRO-1分割优化器状态，显存降低约4倍；ZeRO-2在ZeRO-1基础上分割梯度，显存进一步降低约2倍；ZeRO-3在ZeRO-2基础上分割模型参数，每个GPU只存储1/N的模型参数，显存进一步降低约N倍。ZeRO-3使得训练超大模型成为可能。ZeRO-Infinity还支持将数据卸载到CPU内存甚至NVMe SSD上。

## 实际应用建议

在实际应用中，ZeRO-2是最常用的配置，因为它在显存节省和通信开销之间取得了较好的平衡。DeepSpeed框架提供了完整的ZeRO实现，Hugging Face Transformers也集成了DeepSpeed支持。选择ZeRO阶段时，需要根据模型大小、GPU数量和网络带宽进行权衡。

## 总结

数据并行是最基础的并行策略，ZeRO优化通过消除冗余大幅降低显存占用，使大模型训练成为可能。

## 参考来源

- https://arxiv.org/abs/1910.02054
- https://arxiv.org/abs/2101.06840
- https://github.com/microsoft/DeepSpeed

