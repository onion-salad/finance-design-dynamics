import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MAAdvisorySection from "@/components/services/MAAdvisorySection";
import FinanceArrangementSection from "@/components/services/FinanceArrangementSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="ma" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="flex flex-col sm:flex-row w-full sm:w-auto sm:inline-flex h-auto sm:h-14 items-center text-lg bg-secondary/50 p-1 gap-1">
                <TabsTrigger 
                  value="ma" 
                  className="w-full sm:w-auto px-8 h-12 data-[state=active]:bg-white whitespace-normal sm:whitespace-nowrap text-sm sm:text-base"
                >
                  M&Aアドバイザリー事業
                </TabsTrigger>
                <TabsTrigger 
                  value="finance" 
                  className="w-full sm:w-auto px-8 h-12 data-[state=active]:bg-white whitespace-normal sm:whitespace-nowrap text-sm sm:text-base"
                >
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

              <MAAdvisorySection />
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

              <FinanceArrangementSection />
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