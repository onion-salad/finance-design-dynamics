import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { ChevronRight, Briefcase, LineChart, Users, Shuffle, Search, Scale, Calculator, Building2, Wallet, BarChart4, FileStack } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const maServices = [
    {
      icon: Briefcase,
      title: "フィナンシャル・アドバイザリー業務",
      description: [
        "弊社パートナーであるPEファンドをはじめとした、購入先・売却先のソーシングおよび条件交渉",
        "M&Aプロジェクトのプロセスおよびドキュメンテーション代行",
        "M&Aプロジェクトに適したスキーム立案",
        "各種デューデリジェンスに必要な会計士事務所・法律事務所等の手配"
      ],
      outputs: [
        "プロジェクトで必要となる各種契約書類",
        "対象企業の調査レポート等",
        "その他必要書類作成"
      ]
    },
    {
      icon: LineChart,
      title: "M&Aに関するファイナンス支援業務",
      description: [
        "LBOローン・ブリッジローン等、検討可能性のある金融機関のソーシングから着金まで",
        "対象会社の財務諸表や正常収益力等から判断し、LBOローン後の連結財務諸表の作成、事業計画および資金計画の作成"
      ],
      outputs: [
        "連結財務諸表",
        "事業計画書・資金計画書",
        "その他各種必要書類"
      ]
    },
    {
      icon: Users,
      title: "M&A案件におけるPMO業務",
      description: [
        "全体最適の視点から、同時並行で進行する複数のプロジェクトのマネジメント支援及び統括",
        "マスタープランや全体スケジュールの策定と管理",
        "プロジェクトマネジメント手法の標準化、ポートフォリオ分析",
        "各プロジェクトの品質・コスト管理"
      ],
      outputs: [
        "マスタースケジュール",
        "課題・コスト・リスク管理表",
        "進捗報告書",
        "その他各種必要書類"
      ]
    },
    {
      icon: Shuffle,
      title: "M&A案件におけるPMI業務",
      description: [
        "買収・合併後の統合プロセスを支援いたします",
        "経営・制度・業務など、統合範囲は多岐に渡りますが、それらを最適に統合することで、M&Aの検討段階において計画したシナジー効果の実現に貢献いたします"
      ],
      outputs: [
        "統合方針書",
        "ブランディング・プラン",
        "中期事業計画",
        "その他各種必要書類"
      ]
    },
    {
      icon: Search,
      title: "財務・税務デューデリジェンス支援業務",
      description: [
        "M&Aプロジェクトの性質に合わせ、税理士・会計士事務所を選定し、M&A対象会社または対象事業の財務・税務の状況を調査",
        "買収及び買収後に重要な影響を与える税務リスクの洗い出しを行い、M&Aスキーム・ストラクチャーの検討材料としても活用"
      ],
      outputs: [
        "財務・税務調査報告書"
      ]
    },
    {
      icon: Scale,
      title: "法務デューデリジェンス支援業務",
      description: [
        "対象企業の企業価値算定に、特に重大な影響を与える部分にフォーカス",
        "弁護士事務所と共に潜在的なリスク（簿外債務・未払い賃金・コンプライアンス等）の洗い出しを目指し、レポーティングまでを行います"
      ],
      outputs: [
        "法務調査報告書"
      ]
    },
    {
      icon: Calculator,
      title: "株価・事業価値算定業務",
      description: [
        "財務・税務デューデリジェンスの延長として、企業価値・事業価値を算定しM＆Aの意思決定の材料に用いることや、希望価格で取引が実行できるように支援いたします",
        "DCF、純資産、マルチプルなど様々な手法を活用し、レポーティングまでを行います"
      ],
      outputs: [
        "株価・事業価値算定書"
      ]
    }
  ];

  const financeServices = [
    {
      icon: Building2,
      title: "アレンジメントサービス",
      subtitle: "プロジェクト型",
      description: "資金調達施策の策定や、必要書類の作成、金融機関やファンドへの打診・プレゼンテーションなどを行います。初期的なご相談は無料にて承っております。整理がついていない、まずは壁打ちと言う段階からでもご相談下さい。"
    },
    {
      icon: Wallet,
      title: "CFO代行サービス",
      description: "御社メンバーの一員として、CFO在籍の場合にはそのサポートを、CFO不在の場合には、CFO代行として、財務戦略をサポートいたします。単にVCファンドや金融機関のご紹介にとどまらず、デット・エクイティファイナンスに向けたドキュメンテーション、デューデリジェンス、企業価値算定まで、広範に実務面のサポートまでを行います。"
    }
  ];

  const solutions = [
    {
      icon: BarChart4,
      title: "エクイティ調達",
      categories: [
        {
          name: "スタートアップ企業向け",
          period: "通常：1か月～半年",
          items: [
            "企業価値評価",
            "エクイティマーケットにおける投資家の情報の提供",
            "経営戦略と資本政策の目的およびニーズの整理",
            "資本政策の立案、ストラクチャリング",
            "投資家への打診、アプローチ、選定支援、交渉支援"
          ]
        },
        {
          name: "上場企業向け",
          period: "通常：1年以上",
          items: [
            "財務顧問",
            "事業計画策定支援",
            "キャッシュフロー管理体制の整備",
            "オペレーショナル・リストラクチャリング（PL項目改善）",
            "ファイナンシャル・リストラクチャリング（BS再構築・再設計）",
            "必要運転資金の圧縮検討",
            "決算対策",
            "金融機関や各種ステークホルダーとのコミュニケーション"
          ]
        }
      ]
    },
    {
      icon: FileStack,
      title: "デット調達",
      description: "ブリッジローン、不動産担保ローン、ABL(動産担保ローン)等、特殊なストラクチャーの構築が必要なシーンにおいて、各種金融機関と連携しながら、御社側のアドバイザーとして、ファイナンスの最後までご支援させていただきます。"
    },
    {
      icon: Shuffle,
      title: "ファンド組成アレンジメント",
      description: "金融ニ種免許業者および適格機関投資家との連携により、ファンド組成のサポートをさせていただきます。事業ファンド、投資ファンド等様々なニーズにお応えいたします。投資実行の際には、投資戦略を策定し、ソーシング、デューデリジェンス、キャッシュフロー分析、SPC設立、契約書の作成とクロージングに至るまでのすべての業務をご支援いたします。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="ma" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="inline-flex h-14 items-center text-lg bg-secondary/50 p-1 gap-1">
                <TabsTrigger value="ma" className="px-8 h-12 data-[state=active]:bg-white">
                  M&Aアドバイザリー事業
                </TabsTrigger>
                <TabsTrigger value="finance" className="px-8 h-12 data-[state=active]:bg-white">
                  ファイナンスアレンジメント事業
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ma" className="space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  M&Aアドバイザリー事業
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  ご依頼内容に合わせて、M&Aアドバイザーとしての知識・経験豊かなプロフェッショナルチームを編成いたします。
                  ご依頼主様と「伴走型」でM&Aプロジェクト推進に貢献いたします。
                </p>
              </motion.div>

              <div className="grid gap-8">
                {maServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <div className="space-y-2">
                        {service.description.map((desc, i) => (
                          <div key={i} className="flex items-start gap-2 text-gray-600">
                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p>{desc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t">
                        <h4 className="text-lg font-semibold mb-4">アウトプット</h4>
                        <ul className="space-y-2">
                          {service.outputs.map((output, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-600">
                              <div className="w-2 h-2 rounded-full bg-primary/60" />
                              {output}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="finance">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  ファイナンスアレンジメント事業
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  最善手を提示し、併走型で実行する。法人様の資金調達方法が多様化する中で、特にIPO志向スタートアップ向けのエクイティファイナンスや、上場企業向けの新株およびワラント発行等による資金調達を得意としております。
                </p>
              </motion.div>

              <div className="space-y-16">
                <section>
                  <h2 className="text-3xl font-bold text-center mb-12">Service</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {financeServices.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                          <div className="flex flex-col h-full">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                              <service.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            {service.subtitle && (
                              <p className="text-lg text-primary mb-4">({service.subtitle})</p>
                            )}
                            <p className="text-gray-600 flex-grow">{service.description}</p>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-center mb-12">Solution</h2>
                  <div className="grid gap-8">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={solution.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <solution.icon className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-4 flex-grow">
                              <h3 className="text-2xl font-bold">{solution.title}</h3>
                              {solution.description && (
                                <p className="text-gray-600">{solution.description}</p>
                              )}
                              {solution.categories && (
                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                  {solution.categories.map((category, catIndex) => (
                                    <div key={category.name} className="space-y-4">
                                      <h4 className="text-xl font-semibold">{category.name}</h4>
                                      <p className="text-primary">{category.period}</p>
                                      <ul className="space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                          <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                                            <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              トップへ戻る
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
