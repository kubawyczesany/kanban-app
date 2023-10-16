import { useDraggable, DndContext, DragOverlay } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { WorkspaceButtonIcon } from "../../../../../../../../assets/icons/WorkspaceButtonIcon";
import { UpdateDeleteIcons } from "../../../../../../../../assets/icons/UpdateDeleteIcons";
import { Workspace } from "../../../../../../../../store/types";

interface SelectWorkspaceDragAndDropProps {
  workspace: Workspace;
  handleWorkspaceButtonClick: (workspaceId: number) => void;
  handleDeleteWorkspace: (id: number) => void;
  handleShowEditWorkspace: (id: number) => void;
}

export const SelectWorkspaceDragAndDrop = ({
  workspace,
  handleWorkspaceButtonClick,
  handleDeleteWorkspace,
  handleShowEditWorkspace,
}: SelectWorkspaceDragAndDropProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: `${workspace.id}`,
    });

  const styles = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 2 : 1,
    touchAction: "none",
  };

  return (
    <DndContext>
      <button
        className={`workspace-button ${workspace.isDisplayed ? "active" : ""}`}
        key={workspace.id}
        onClick={() => handleWorkspaceButtonClick(workspace.id)}
        ref={setNodeRef}
        style={styles}
        {...attributes}
        {...listeners}
      >
        <WorkspaceButtonIcon />
        {workspace.name}
        <UpdateDeleteIcons
          onDeleteClick={() => handleDeleteWorkspace(workspace.id)}
          onEditClick={() => handleShowEditWorkspace(workspace.id)}
        />
      </button>
      <DragOverlay>
        {isDragging ? (
          <button
            className={`workspace-button ${
              workspace.isDisplayed ? "active" : ""
            }`}
            key={workspace.id}
          >
            <WorkspaceButtonIcon />
            {workspace.name}
            <UpdateDeleteIcons
              onDeleteClick={() => handleDeleteWorkspace(workspace.id)}
              onEditClick={() => handleShowEditWorkspace(workspace.id)}
            />
          </button>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
