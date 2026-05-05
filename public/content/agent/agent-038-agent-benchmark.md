# Agent评估基准：衡量AI Agent能力的新标准

随着AI Agent的快速发展，建立科学、全面的评估基准成为行业亟需，多个Agent评估框架在2025年相继推出。

## Agent评估的挑战与需求

AI Agent的评估比传统大模型的评估更加复杂。传统的大模型评估主要关注生成质量（如BLEU、ROUGE等指标），而Agent评估需要考虑任务完成率、工具使用正确性、多步骤推理能力和错误恢复能力等多个维度。此外，Agent的评估还需要考虑执行效率、成本和安全性等实际因素。

2025年，多个研究机构和企业推出了Agent评估基准。伯克利大学推出了WebArena，评估Agent在真实Web环境中的操作能力。Google推出了AgentBench，涵盖多种任务类型的Agent评估。OpenAI推出了Evals框架，支持自定义Agent评估场景。

## 主流评估基准

WebArena是当前最具影响力的Agent评估基准之一。它模拟了真实的Web操作环境（如购物网站、论坛和地图），要求Agent完成复杂的操作任务。WebArena包含812个测试任务，涵盖信息搜索、表单填写、账户管理等场景。目前最强的Agent在WebArena上的成功率为35%-40%，远低于人类的85%。

其他重要的评估基准包括：SWE-bench（评估Agent的软件工程能力）、GAIA（通用AI助手评估）、ToolBench（评估Agent的工具使用能力）和AgentBench（综合Agent评估）。在中国，清华大学的SuperCLUE-Agent和上海AI Lab的AgentEval也在推动中文Agent评估的发展。

## 评估方法论的发展

Agent评估方法论在2025年取得了重要进展。传统的静态评估（使用固定的测试集）正在向动态评估（根据Agent的表现动态调整测试难度）演进。此外，"人类偏好评估"（Human Preference Evaluation）越来越受到重视，即由人类评估者对Agent的输出进行质量评分。

行业也在推动评估标准的统一。MLCommons推出了MLPerf Agent基准，旨在建立行业通用的Agent评估标准。然而，Agent评估仍面临一些根本性挑战：如何评估开放式任务的完成质量？如何衡量Agent的"创造力"和"判断力"？这些问题仍有待进一步研究。

## 总结

Agent评估面临多维度评估的挑战，WebArena、SWE-bench、GAIA等基准相继推出。最强Agent在WebArena上成功率35%-40%（人类85%），MLCommons正在推动行业统一标准。

## 参考来源

- https://webarena.dev/
- https://github.com/web-arena-x/webarena
- https://mlcommons.org/en/benchmarks/mlperf-agent/
