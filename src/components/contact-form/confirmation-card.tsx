import { CheckIcon } from "lucide-react";

export default function ConfirmationCard() {
  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-4 items-center max-w-xs aspect-video p-4 bg-white text-center border border-primary">
      <div className="border rounded-full border-primary p-1">
        <CheckIcon />
      </div>
      <span className="font-semibold">Submission Has Been Received.</span>
      <p className="text-sm">
        Your submission has been received. It will be reviewed by our office and
        a confirmation will be sent to example@email.com. Please do
        not hesitate to contact us if you experience any technical difficulties.
      </p>
    </div>
  );
}
