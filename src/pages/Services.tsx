import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { ChevronRight, Briefcase, LineChart, Users, Shuffle, Search, Scale, Calculator } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-8 mb-16"
          >
            {services.map((service, index) => (
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
          </motion.div>

          <div className="text-center">
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
