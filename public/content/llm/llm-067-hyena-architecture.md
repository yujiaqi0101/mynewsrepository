# Hyena架构：基于长卷积的序列建模新方法

Hyena架构利用长卷积（Long Convolution）替代自注意力，通过隐式参数化的卷积核实现高效的序列建模。

## 引言

Hyena是由斯坦福大学Hazy Research团队提出的一种基于长卷积（Long Convolution）的序列建模架构。Hyena的核心思想是用隐式参数化的长卷积核替代自注意力机制，实现亚二次复杂度的序列建模。

## 长卷积原理

标准卷积的核大小是固定的，只能捕捉局部模式。长卷积的核大小等于序列长度，理论上可以捕捉任意距离的依赖关系。然而，直接使用长卷积的参数量是O(n)，不可行。Hyena通过隐式参数化解决了这个问题：卷积核不是直接存储的，而是通过一个参数化的函数在频域中生成。Hyena利用快速傅里叶变换（FFT）将卷积运算转换到频域，FFT的计算复杂度为O(n log n)，远低于注意力的O(n²)。

## HyenaDNA与专业领域应用

Hyena Research团队将Hyena架构应用于基因组序列建模，推出了HyenaDNA模型。在基因组基准上，HyenaDNA在相同计算预算下超过了Transformer。HyenaDNA可以处理长达100万碱基对的序列。2024年，StripedHyena进一步改进了架构，将注意力层和Hyena层交替堆叠，在语言建模任务上达到了与Llama-2-7B相当的性能。

## 与其他架构的比较

Hyena与SSM（如Mamba）有相似之处：两者都追求亚二次复杂度的序列建模。区别在于：SSM基于状态空间方程，Hyena基于长卷积；SSM在推理时是O(1)复杂度，Hyena是O(n log n)。在实际应用中，Hyena更适合离线处理超长序列，而SSM更适合在线流式推理。Hyena架构目前仍处于研究阶段，但其创新的思路为模型架构创新提供了有价值的方向。

## 总结

Hyena架构利用长卷积（Long Convolution）替代自注意力，通过隐式参数化的卷积核实现高效的序列建模。

## 参考来源

- https://arxiv.org/abs/2302.10866
- https://github.com/HazyResearch/hyena-dna
- https://arxiv.org/abs/2402.08846

