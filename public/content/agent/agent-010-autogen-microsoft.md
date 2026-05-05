# AutoGen：微软的Agent解决方案

微软AutoGen从研究项目发展为成熟的企业级Agent框架，与Azure生态深度集成，推动Agent在企业中的落地。

## AutoGen的发展历程

AutoGen最初是微软研究院的研究项目，2025年发展为成熟的企业级Agent框架。AutoGen v0.4引入了有状态的多Agent对话、人机协作循环和复杂的任务编排。

核心设计理念是对话驱动（Conversation-Driven）。Agent之间的交互以对话形式进行，支持两种Agent类型：AssistantAgent（基于LLM）和UserProxyAgent（人类用户代理）。

## 与Azure生态的集成

AutoGen可以直接调用Azure OpenAI Service、Azure Cognitive Services和Azure AI Search。支持Azure Active Directory（Entra ID）身份认证和RBAC访问控制。

AutoGen Studio提供低代码的Agent开发环境，用户可以通过拖拽创建Agent和定义任务。生成的Agent可以直接部署到Azure Container Apps或Azure Kubernetes Service。

## 企业应用与案例

埃森哲使用AutoGen构建了企业知识管理Agent。毕马威开发了财务审计Agent。可口可乐构建了市场营销Agent。AutoGen支持分布式部署和持久化恢复。

微软表示AutoGen是Microsoft Copilot Stack的重要组成部分，未来将更深度地集成到Microsoft 365和Dynamics 365中。

## 总结

AutoGen从研究项目发展为与Azure深度集成的企业级Agent框架。对话驱动的设计和AutoGen Studio低代码平台降低了开发门槛，埃森哲、毕马威等企业的成功案例验证了其企业级能力。

## 参考来源

- https://microsoft.github.io/autogen/
- https://github.com/microsoft/autogen
- https://azure.microsoft.com/en-us/products/ai-services
