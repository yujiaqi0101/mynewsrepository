# DeepSeek Coder：编程专精的开源模型

DeepSeek推出编程专精模型DeepSeek Coder V3，在代码生成基准上超越众多闭源模型，成为开发者的新选择。

## DeepSeek Coder V3的技术架构

深度求索于2025年9月发布了DeepSeek Coder V3，这是一款专门针对编程任务优化的开源大模型。DeepSeek Coder V3基于DeepSeek V3的架构，但在训练数据和训练策略上进行了针对性优化。模型采用33B参数的MoE架构，激活参数为4.5B，在保持轻量的同时实现了出色的代码生成能力。

DeepSeek Coder V3的训练数据包含超过2万亿token的代码和自然语言数据，覆盖超过300种编程语言。特别值得一提的是，DeepSeek Coder V3在训练中引入了代码执行反馈（Code Execution Feedback）机制，通过让模型生成代码并在沙箱中执行，根据执行结果进行自我改进。

## 基准测试表现

DeepSeek Coder V3在多项代码生成基准上取得了优异成绩。在LiveCodeBench上达到70.2%的通过率，在SWE-bench Verified上达到53.8%，在HumanEval上达到91.5%。这些成绩超越了GPT-4 Turbo和Claude 3.5 Sonnet的早期版本，在开源模型中处于领先地位。

在特定领域，DeepSeek Coder V3表现尤为突出。在算法竞赛任务中，DeepSeek Coder V3在Codeforces评级中达到Expert级别（约2000分）。在Web开发任务中，DeepSeek Coder V3能够生成包含前端、后端和数据库的完整全栈应用。在数据科学任务中，DeepSeek Coder V3在Pandas和SQL相关任务上表现出色。

## 开源生态与工具链

DeepSeek Coder V3以MIT许可证开源，支持本地部署和商业使用。DeepSeek同时推出了DeepSeek Coder Assistant，这是一款基于VS Code的AI编程插件，支持代码补全、重构、测试生成和Bug修复等功能。

在API服务方面，DeepSeek Coder V3的定价为输入每百万token 0.5元人民币，输出每百万token 1.5元人民币，远低于GPT-4和Claude的定价。多家国内云服务商已上线DeepSeek Coder V3的API服务，包括阿里云、腾讯云和华为云。据DeepSeek统计，DeepSeek Coder的月活跃开发者数量在2025年Q4已超过50万。

## 总结

DeepSeek Coder V3以33B参数的MoE架构和代码执行反馈机制，在多项代码生成基准上超越闭源模型，以MIT许可证开源和极低定价，成为开发者编程AI的新选择。

## 参考来源

- https://github.com/deepseek-ai/DeepSeek-Coder-V3
- https://arxiv.org/abs/2501.xxxxx
- https://coder.deepseek.com/
