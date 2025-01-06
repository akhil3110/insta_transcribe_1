"use client";

import { useEffect } from "react";
import TranscriptionItem from "./transcription-item";
import useTranscriptionStore from "@/store/transcription-store";

interface TranscriptionTableProps {
  transcriptiondata: {
    start_time: string;
    end_time: string;
    content: string;
  }[];
}

const TranscriptionTable = ({ transcriptiondata }: TranscriptionTableProps) => {
  const { transcriptions, setTranscriptions } = useTranscriptionStore();

  useEffect(() => {
    setTranscriptions(transcriptiondata);
  }, []);

  const updateTranscription = (index: number, property: string, ev: any) => {
    const newTranscription = [...transcriptions];
    //@ts-expect-error
    newTranscription[index][property] = ev.target.value;
    setTranscriptions(newTranscription);
  };

  return (
    <>
      <div className="w-full sticky top-0 grid grid-cols-3 bg-gray-900 text-gray-200 rounded-md p-4 text-base md:text-lg font-bold shadow-md border-b border-gray-700">
        {/* Start Time */}
        <div className="col-span-1 text-center text-sm md:text-base">Start Time</div>

        {/* End Time */}
        <div className="col-span-1 text-center text-sm md:text-base">End Time</div>

        {/* Caption */}
        <div className="col-span-1  
         text-center text-sm md:text-base">
          Caption
          <div className="ml-2 text-xs text-gray-400 italic">(editable)</div>
        </div>
      </div>

      <div className="w-full bg-gray-800 grid grid-cols-3 gap-4 p-4 rounded-md shadow-sm">
        {transcriptions.length > 0 &&
          transcriptions.map((item, key) => (
            <TranscriptionItem
              key={key}
              item={item}
              handleContentChange={(ev: any) =>
                updateTranscription(key, "content", ev)
              }
            />
          ))}
      </div>
    </>
  );
};

export default TranscriptionTable;
