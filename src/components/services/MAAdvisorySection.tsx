import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ServiceItem {
  title: string;
  content: string;
  outputs: string[];
}

const services: ServiceItem[] = [
  {
    title: "フィナンシャル・アドバイザリー業務",
    content: "①弊社パートナーであるPEファンドをはじめとした、購入先・売却先のソーシングおよび条件交渉\n②M&Aプロジェクトのプロセスおよびドキュメンテーション代行\n③M&Aプロジェクトに適したスキーム立案\n④各種デューデリジェンスに必要な会計士事務所・法律事務所等の手配",
    outputs: [
      "プロジェクトで必要となる各種契約書類",
      "対象企業の調査レポート等",
      "その他必要書類作成"
    ]
  },
  {
    title: "M&Aに関するファイナンス支援業務",
    content: "①LBOローン・ブリッジローン等、検討可能性のある金融機関のソーシングから着金まで\n②対象会社の財務諸表や正常収益力等から判断し、LBOローン後の連結財務諸表の作成、事業計画および資金計画の作成",
    outputs: [
      "連結財務諸表",
      "事業計画書",
      "資金計画書",
      "その他各種必要書類"
    ]
  },
  {
    title: "M&A案件におけるPMO業務",
    content: "全体最適の視点から、同時並行で進行する複数のプロジェクトのマネジメント支援及び統括を行います。マスタープランや全体スケジュールの策定と管理、プロジェクトマネジメント手法の標準化、ポートフォリオ分析、各プロジェクトの品質・コスト管理などを行います。",
    outputs: [
      "マスタースケジュール",
      "課題・コスト・リスク管理表",
      "進捗報告書",
      "その他各種必要書類"
    ]
  },
  {
    title: "M&A案件におけるPMI業務",
    content: "買収・合併後の統合プロセスを支援いたします。経営・制度・業務など、統合範囲は多岐に渡りますが、それらを最適に統合することで、M&Aの検討段階において計画したシナジー効果の実現に貢献いたします。",
    outputs: [
      "統合方針書",
      "ブランディング・プラン",
      "中期事業計画",
      "その他各種必要書類"
    ]
  },
  {
    title: "財務・税務デューデリジェンス支援業務",
    content: "M&Aプロジェクトの性質に合わせ、税理士・会計士事務所を選定し、M&A対象会社または対象事業の財務・税務の状況を調査します。買収及び買収後に重要な影響を与える税務リスクの洗い出しを行い、M&Aスキーム・ストラクチャーの検討材料としても活用します。",
    outputs: [
      "財務・税務調査報告書"
    ]
  },
  {
    title: "法務デューデリジェンス支援業務",
    content: "対象企業の企業価値算定に、特に重大な影響を与える部分にフォーカスし、弁護士事務所と共に潜在的なリスク（簿外債務・未払い賃金・コンプライアンス等）の洗い出しを目指し、レポーティングまでを行います。",
    outputs: [
      "法務調査報告書"
    ]
  },
  {
    title: "株価・事業価値算定業務",
    content: "財務・税務デューデリジェンスの延長として、企業価値・事業価値を算定しM＆Aの意思決定の材料に用いることや、希望価格で取引が実行できるように支援いたします。DCF、純資産、マルチプルなど様々な手法を活用し、レポーティングまでを行います。",
    outputs: [
      "株価・事業価値算定書"
    ]
  }
];

const MAAdvisorySection = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ご依頼内容に合わせて、M&Aアドバイザーとしての知識・経験豊かなプロフェッショナルチームを編成いたします。
          ご依頼主様と「伴走型」でM&Aプロジェクト推進に貢献いたします。
        </p>
      </motion.div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center mb-8">Service<br />- アドバイザリーサービス一覧 -</h2>
        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">業務内容</h4>
                    <p className="text-gray-600 whitespace-pre-line">{service.content}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">アウトプット</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {service.outputs.map((output, i) => (
                        <li key={i}>{output}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MAAdvisorySection;