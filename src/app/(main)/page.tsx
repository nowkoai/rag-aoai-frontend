import FormInput from "../components/FormInput/FormInput";
import MessageArea from "../components/MessageArea/MessageArea";

export default function Home() {
  console.log("process.env.AZURE_OPENAI_API_KEY: ", process.env.AZURE_OPENAI_API_KEY)
  return (
    <main className="flex flex-col text-gray-800 w-full h-full overflow-y-auto">
      <div className="flex bg-slate-300 h-5/6 p-4 justify-center">
        <MessageArea />
        MessageArea
      </div>
      <div className="flex h-1/6 p-4 justify-center items-center">
        <FormInput />
        FormInput
      </div>
    </main>
  );
}