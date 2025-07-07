import { Textarea } from "@/components/ui/textarea";

export default function CodeEditor({
  value,
  onChange,
  language = "javascript",
}) {
  // In a real implementation, you would use a proper code editor like Monaco Editor
  // For this MVP, we'll use a simple textarea with some basic styling
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="font-mono text-sm h-64 whitespace-pre"
      spellCheck={false}
    />
  );
}
