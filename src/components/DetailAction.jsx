import PropTypes from "prop-types";
import {
  mdiArchiveArrowDown,
  mdiArchiveArrowUp,
  mdiArrowLeftThick,
  mdiDelete
} from "@mdi/js";
import ActionButton from "./ActionButton";
import ActionLink from "./ActionLink";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { translate } from "../utils";

export default function DetailNoteAction({
  id,
  onDelete,
  onArchive,
  onUnarchive,
  archived,
  actionType
}) {
  const { locale } = useContext(LocaleContext);

  /* Determine the buttons displayed and to, title attr link for 'back to',
  based on the active or archived note page */
  let onArchiveAction = onArchive;
  let archiveIcon = mdiArchiveArrowDown;
  let archiveTitle = translate(locale, "Arsip catatan", "Archive note");
  let backTo = "/";
  let backTitle = translate(locale, "Kembali ke Home", "Back to Home");
  if (archived) {
    onArchiveAction = onUnarchive;
    archiveIcon = mdiArchiveArrowUp;
    archiveTitle = translate(locale, "Batalkan arsip", "Unarchive");
    backTo = "/archives";
    backTitle = translate(locale, "Kembali ke Arsip", "Back to Archive");
  }

  return (
    <div className="detail-action position-fixed d-flex flex-md-column bottom-0 end-0 py-3 px-4 p-md-5">
      <ActionLink to={backTo} title={backTitle} iconPath={mdiArrowLeftThick} />
      <ActionButton
        id={id}
        onClick={onArchiveAction}
        btnClass="btn-outline-secondary me-5 me-md-0 mb-md-5"
        iconPath={archiveIcon}
        title={archiveTitle}
        actionType={actionType}
        actionBtnType="archive"
      />
      <ActionButton
        id={id}
        onClick={onDelete}
        btnClass="btn-outline-danger"
        iconPath={mdiDelete}
        title={translate(locale, "Hapus arsip", "Delete archive")}
        actionType={actionType}
        actionBtnType="delete"
      />
    </div>
  );
}

DetailNoteAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
  actionType: PropTypes.string.isRequired
};
