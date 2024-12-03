import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // ここにEmailJSのService IDを入力
        'YOUR_TEMPLATE_ID', // ここにEmailJSのTemplate IDを入力
        form.current,
        'YOUR_PUBLIC_KEY' // ここにEmailJSのPublic Keyを入力
      );

      toast({
        title: "送信完了",
        description: "お問い合わせを受け付けました。担当者より順次ご連絡させていただきます。",
      });
      
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      toast({
        title: "エラー",
        description: "送信に失敗しました。時間をおいて再度お試しください。",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
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
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ご質問やご相談がございましたら、お気軽にお問い合わせください。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">所在地</h3>
                    <p className="text-gray-600">
                      〒100-0005<br />
                      東京都千代田区丸の内1-1-1
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">電話番号</h3>
                    <p className="text-gray-600">03-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">メールアドレス</h3>
                    <p className="text-gray-600">info@concentric.co.jp</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    お名前
                  </label>
                  <Input id="name" name="user_name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    メールアドレス
                  </label>
                  <Input id="email" name="user_email" type="email" required />
                </div>
                
                <div>
                  <label htmlFor="company" className="block font-medium mb-2">
                    会社名
                  </label>
                  <Input id="company" name="user_company" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-2">
                    お問い合わせ内容
                  </label>
                  <Textarea id="message" name="message" required className="min-h-[150px]" />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  送信する
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;