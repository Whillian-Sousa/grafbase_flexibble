import Modal from "@/components/Modal";
import ProjactForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

const CreateProject = async () => {
  const session = await getCurrentUser()
  
  if(!session?.user) redirect('/')
  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>
      
      <ProjactForm type='create' session={session}/>
    </Modal>
  );
};

export default CreateProject;
