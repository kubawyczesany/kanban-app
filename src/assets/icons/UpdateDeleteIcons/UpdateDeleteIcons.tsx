import { EditIcon } from "../EditIcon";
import { TrashIcon } from "../TrashIcon";
import { iconStyle } from "./UpdateDeleteIcons.styles";
import "./UpdateDeleteIcons.scss";

interface UpdateDeleteIconsProps {
  onEditClick: () => void | undefined;
  onDeleteClick: () => void | undefined;
}

export const UpdateDeleteIcons = ({
  onEditClick,
  onDeleteClick,
}: UpdateDeleteIconsProps) => {
  return (
    <span className="icons">
      <span className="icons-button-edit" onClick={onEditClick}>
        <EditIcon style={iconStyle.edit} />
      </span>
      <span className="icons-button-delete" onClick={onDeleteClick}>
        <TrashIcon style={iconStyle.trash} />
      </span>
    </span>
  );
};
