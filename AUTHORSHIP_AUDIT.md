# 网站文档署名与来源核验

**后续决定（2026-09-22）**：用户看过这几篇文档后，要求全部从个人网站移除。因此下文“保留”是此前核验阶段的历史处理，不再代表当前展示状态。中英文文档栏目及入口已全部撤下；原研究仓库文件未删除。未经新的明确要求，不恢复这些条目。

核验日期：2026-09-22。对象为原主页“技术文档”栏中的四个链接，已逐篇检查在线正文、本地文件和可用的 Git 修改历史。没有修改原研究仓库中的文档或署名。

## 判断原则

文档直接署名优先于仓库所有者和提交者。提交者只能证明谁把文件纳入/修改仓库，不能自动证明原文作者；引用 NVIDIA 示例的源码阅读笔记，也不能把示例代码归为个人原创。正文无作者栏时，不编造作者姓名。

本次撤回“全部文档都不是用户作品”的判断，改为逐篇处理。保留项按项目维护资料及笔记性质呈现，不添加“原创论文”“独立原创文章”或虚构作者署名；新发现的直接署名/转载来源优先于目前的维护记录。

## 四篇结果

| 原网站条目 | 直接署名与来源 | 可用修改记录 | 网站处理 |
| --- | --- | --- | --- |
| CUTLASS NVFP4 GEMM 技术解析（原文件标题为“CUTLASS NVFP4 GEMM 技术分享”） | 文件第3行明确写“作者：黄河澎”，在线正文一致 | b7f46fc 由 Jianye SHI 于2026-06-30提交，最初版本也保留该署名；这个反例直接说明提交者不等于作者 | 排除，不以改标题或换分类的方式继续展示为个人成果；保留原仓库文件和署名 |
| PTX To SASS：B200 指令映射验证 | README 没有单列作者；正文是本项目目录、边界及当前状态说明，不是另有署名的外部文章 | README维护历史包括c3907981739、5397d9d2a99、c28939ab5f3、cfc26db6195，记录为Jianye SHI；内容围绕本人已有项目展开 | 保留，改称“项目说明与验证边界”；不把整个README当单独原创论文 |
| Blackwell tcgen05 GEMM 数据流 | 正文没有单列作者；明确以NVIDIA CUTLASS的02_mma_tma_sm100.cu为参照 | 从81e7966的fragment descriptor阅读提纲，到9a2cef2复制为数据流主题，再经410b873、4a0bd5a加入/修改图示，后续aa38697、d322ab0、22fd33c维护；记录为Jianye SHI。最早提纲明确列NVIDIA文档为Source | 保留为“基于NVIDIA CUTLASS示例的源码阅读笔记”，公开写明上游来源，不把NVIDIA代码当作本人原创 |
| Thor / SM110 GEMM Shared Memory研究 | 正文没有单列作者；开头明确“研究计划，不是结论性技术报告”，末尾列NVIDIA官方资料 | 29430a6于2026-06-26新增，b7f46fc于6月30日修改，记录为Jianye SHI；内容关联本人的GEMM及微基准目录 | 保留为“问题定义/研究计划”，不再暗示已完成实验结论 |

## 证据入口

- [明确署名黄河澎的NVFP4原文](https://github.com/hibouwu/CUDA_optimazation/blob/main/Docs/cutlass/cutlassNVFP4GEMM.md#L3)
- [PTX项目README](https://github.com/hibouwu/PTX_To_SASS/blob/main/README.md)
- [CuTe数据流笔记](https://github.com/hibouwu/CUDA_optimazation/blob/main/Docs/cutlass/cute_layout/cutlass_gemm_dataflow_tile_partition_thread_partition_storage_mapping/README.md)
- [Thor研究计划](https://github.com/hibouwu/CUDA_optimazation/blob/main/Docs/cutlass/sm110_gemm_bank_conflict_research.md)
- [CuTe最初阅读提纲提交81e7966](https://github.com/hibouwu/CUDA_optimazation/commit/81e7966435456fe704a14fd34470ec0e9b110cf7)
- [研究计划最初提交29430a6](https://github.com/hibouwu/CUDA_optimazation/commit/29430a6d30b9b86d63077134032ada66145f6a84)

## 能确认与不能确认的区别

可以确认NVFP4文章署名不是石健晔；可以确认另三篇的正文性质、显式来源和本地维护记录。后者支持“本人维护的项目文档/阅读笔记/研究计划”的呈现，但不足以证明每一句话、图片或代码均为本人独立创作。网站不作这种额外声明。并未对文档做全网逐句查重，也未把AI辅助整理与独立写作混作同一结论。

中英文页面采用同一组三个链接、同样的资料类型和来源说明。测试只防止已明确识别的第三方文章回到个人资料栏，不再禁止整个文档栏目。
