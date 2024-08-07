import { Button } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageAction";
import { queryClient } from "app/config/ReactQueryClientProvider";
import { useRef } from "react";

export default function FileDragDropzone() {
  const fileRef = useRef(null);
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["images"] });
    },
  });
  const onSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = fileRef.current.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      const result = await uploadImageMutation.mutate(formData);
      console.log(result);
    }
  };
  return (
    <form
      className="w-full  py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center"
      onSubmit={onSumbit}
    >
      <input type="file" className="" ref={fileRef} />
      <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.</p>
      <Button type="submit" loading={uploadImageMutation.isPending}>
        파일 업로드
      </Button>
    </form>
  );
}
