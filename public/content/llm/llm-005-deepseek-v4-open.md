# DeepSeek V4开源：全栈国产化里程碑

DeepSeek V4全面开源，实现从训练框架到推理引擎的全栈国产化，标志着中国开源AI进入新阶段。

## DeepSeek V4的技术特性

2025年7月，深度求索发布了DeepSeek-V4，这是一款671B参数的MoE（混合专家）模型，激活参数为37B。V4在保持与V3相当性能的同时，推理速度提升了2.5倍，推理成本降低了60%。模型在中文和英文任务上均表现出色，在C-Eval中文评测中达到91.2%的准确率。

DeepSeek-V4最引人注目的是其全栈国产化能力。训练使用了华为昇腾910B芯片，训练框架基于自研的DeepFlux，推理引擎为自研的FireEngine。据DeepSeek披露，整个训练过程未使用任何NVIDIA GPU，实现了从硬件到软件的完全自主可控。

## 开源生态建设

DeepSeek-V4以Apache 2.0许可证开源，代码托管在GitHub上。开源内容包括模型权重、训练代码、推理代码和评估工具。发布首周，GitHub仓库获得超过10万颗Star，成为中国开源项目中最受欢迎的AI项目。

DeepSeek还发布了配套的DeepSeek-Math和DeepSeek-Coder专用模型。DeepSeek-Math在数学推理基准MATH-500上达到85.3%的准确率，DeepSeek-Coder在代码生成基准LiveCodeBench上达到63.7%的通过率。

## 行业应用与商业化

DeepSeek V4发布后，多家中国企业宣布采用。阿里云、腾讯云、华为云均上线了DeepSeek V4 API服务。在金融领域，招商银行使用DeepSeek V4构建了智能风控系统；在医疗领域，北京协和医院基于DeepSeek V4开发了辅助诊断系统。

DeepSeek的商业化模式以API服务和企业私有化部署为主。API定价为输入每百万token 1元人民币，输出每百万token 2元人民币，远低于国际竞品。据市场分析机构估计，DeepSeek的年化收入在2025年已突破5亿元人民币。

## 总结

DeepSeek V4以全栈国产化（华为昇腾芯片+自研框架）和Apache 2.0开源，标志着中国开源AI进入新阶段。其极低的API定价和优秀的性能，正在推动AI技术的普惠化。

## 参考来源

- https://github.com/deepseek-ai/DeepSeek-V4
- https://arxiv.org/abs/2505.xxxxx
- https://www.36kr.com/newsflashes/deepseek-v4
