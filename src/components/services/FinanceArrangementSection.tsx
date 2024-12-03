import { motion } from "framer-motion";
import { Building2, Wallet, ChartBar, CreditCard, DollarSign, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    icon: ChartBar,
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
    icon: CreditCard,
    title: "デット調達",
    description: "ブリッジローン、不動産担保ローン、ABL(動産担保ローン)等、特殊なストラクチャーの構築が必要なシーンにおいて、各種金融機関と連携しながら、御社側のアドバイザーとして、ファイナンスの最後までご支援させていただきます。"
  },
  {
    icon: DollarSign,
    title: "ファンド組成アレンジメント",
    description: "金融ニ種免許業者および適格機関投資家との連携により、ファンド組成のサポートをさせていただきます。事業ファンド、投資ファンド等様々なニーズにお応えいたします。投資実行の際には、投資戦略を策定し、ソーシング、デューデリジェンス、キャッシュフロー分析、SPC設立、契約書の作成とクロージングに至るまでのすべての業務をご支援いたします。"
  }
];

const FinanceArrangementSection = () => {
  return (
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
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 border border-primary/10">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{service.title}</h3>
                  {service.subtitle && (
                    <p className="text-lg text-primary/80 mb-4 font-medium">({service.subtitle})</p>
                  )}
                  <p className="text-gray-600 flex-grow leading-relaxed">{service.description}</p>
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
              <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-gray-200">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex md:flex-col items-center gap-4 flex-shrink-0 w-full md:w-48">
                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{solution.title}</h3>
                  </div>
                  <div className="space-y-4 flex-grow w-full">
                    {solution.description && (
                      <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                    )}
                    {solution.categories && (
                      <div className="grid md:grid-cols-2 gap-8 mt-8">
                        {solution.categories.map((category, catIndex) => (
                          <div key={category.name} className="space-y-4 bg-gray-50/50 p-6 rounded-lg border border-gray-100">
                            <h4 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{category.name}</h4>
                            <p className="text-primary/80 font-medium">{category.period}</p>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                                  <ChevronRight className="w-5 h-5 text-primary/60 flex-shrink-0 mt-1" />
                                  <span className="leading-relaxed">{item}</span>
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
  );
};

export default FinanceArrangementSection;
