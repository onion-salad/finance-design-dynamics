import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const EmailJSSettings = () => {
  const { toast } = useToast();
  const [serviceId, setServiceId] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [publicKey, setPublicKey] = useState('');

  useEffect(() => {
    // Load saved settings from localStorage
    const savedServiceId = localStorage.getItem('emailjs_service_id');
    const savedTemplateId = localStorage.getItem('emailjs_template_id');
    const savedPublicKey = localStorage.getItem('emailjs_public_key');

    if (savedServiceId) setServiceId(savedServiceId);
    if (savedTemplateId) setTemplateId(savedTemplateId);
    if (savedPublicKey) setPublicKey(savedPublicKey);
  }, []);

  const handleSave = () => {
    localStorage.setItem('emailjs_service_id', serviceId);
    localStorage.setItem('emailjs_template_id', templateId);
    localStorage.setItem('emailjs_public_key', publicKey);

    toast({
      title: "設定を保存しました",
      description: "EmailJSの設定が正常に保存されました。",
    });
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">EmailJS設定</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Service ID</label>
          <Input
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            placeholder="例: service_xxxxxxx"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Template ID</label>
          <Input
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value)}
            placeholder="例: template_xxxxxxx"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Public Key</label>
          <Input
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
            placeholder="例: XXXXXXXXXXXXXXXX"
          />
        </div>
        <Button onClick={handleSave} className="w-full">
          設定を保存
        </Button>
      </div>
    </div>
  );
};