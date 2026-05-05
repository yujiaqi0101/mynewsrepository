# vLLM与Triton：大模型推理的双引擎

vLLM的PagedAttention和Triton Inference Server的多模型支持，构成了大模型推理服务的两大核心引擎。

## 引言

vLLM和NVIDIA Triton Inference Server是大模型推理领域最重要的两个开源框架。vLLM以PagedAttention和连续批处理闻名，Triton以多框架支持和生产级特性著称。

## vLLM的PagedAttention

vLLM的核心创新是PagedAttention，借鉴了操作系统虚拟内存管理的分页思想。传统推理框架需要为每个请求预分配最大长度的KV缓存，导致大量内存浪费。PagedAttention将KV缓存分割为固定大小的块，按需分配，不同请求可以共享相同的物理块。KV缓存利用率从20-40%提升到接近100%。2024-2025年，vLLM持续进化：支持了多GPU张量并行、多模态模型、前缀缓存和更高效的调度策略。

## Triton Inference Server

NVIDIA Triton是一个通用的模型推理服务器，支持TensorRT、PyTorch、ONNX等多种后端。核心优势包括：多模型支持、动态批处理、模型热更新和多GPU多节点支持。Triton的Python Backend允许用户自定义推理逻辑。

## 选型建议与结合

选择vLLM的场景：纯LLM推理、追求极致吞吐量、需要长上下文支持。选择Triton的场景：需要同时部署多种模型、需要企业级特性。两者结合的场景：使用Triton作为前端网关，将请求转发给后端的vLLM实例。2025年，vLLM也开始支持作为Triton的后端运行。

## 总结

vLLM的PagedAttention和Triton Inference Server的多模型支持，构成了大模型推理服务的两大核心引擎。

## 参考来源

- https://arxiv.org/abs/2309.06180
- https://github.com/vllm-project/vllm
- https://docs.nvidia.com/deeplearning/triton-inference-server/

