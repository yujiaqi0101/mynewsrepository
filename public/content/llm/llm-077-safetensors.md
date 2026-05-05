# Safetensors：安全高效的大模型文件格式

Safetensors是Hugging Face推出的模型存储格式，解决了传统pickle格式的安全问题和加载效率问题。

## 引言

Safetensors是由Hugging Face开发的一种新型模型序列化格式，旨在解决传统PyTorch pickle格式的安全性和加载效率问题。自2023年发布以来，Safetensors已成为Hugging Face Hub上模型文件的标准格式。

## 安全问题与解决方案

PyTorch的默认序列化格式使用Python的pickle模块，pickle在反序列化时会执行任意代码。这意味着加载一个恶意的.pt文件可能导致任意代码执行（RCE攻击）。Safetensors使用零拷贝的二进制格式，不包含任何可执行代码。文件格式非常简单：一个JSON头部和原始张量数据。这种设计从根本上消除了代码注入的风险。

## 加载效率

Safetensors的另一个优势是加载效率。由于文件格式支持内存映射（mmap），加载模型时不需要将整个文件读入内存。对于大模型（如70B参数），Safetensors的加载速度比pickle快2-6倍。此外，Safetensors支持懒加载，只加载需要的张量，这对于多GPU部署特别有用。

## 生态系统与最佳实践

Safetensors已被Hugging Face Transformers、Diffusers、PEFT等主流库原生支持。在Hugging Face Hub上，超过90%的新上传模型使用Safetensors格式。对于模型开发者，建议始终使用Safetensors格式发布模型。Safetensors的局限性包括不支持增量保存、不支持压缩以及不支持加密。

## 总结

Safetensors是Hugging Face推出的模型存储格式，解决了传统pickle格式的安全问题和加载效率问题。

## 参考来源

- https://huggingface.co/docs/safetensors
- https://github.com/huggingface/safetensors
- https://huggingface.co/blog/safetensors

