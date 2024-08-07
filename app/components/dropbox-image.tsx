import { IconButton } from "@material-tailwind/react";
import { getImageUrl } from "utils/supabase/storage";

export default function DropboxImage({ path }: { path: string }) {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      <div>
        <img
          src={getImageUrl(path)}
          alt="img"
          className="w-full aspect-square rounded-2xl "
        />
      </div>
      <div>{path}</div>
      <div className="absolute top-4 right-4 ">
        <IconButton color="red">
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
