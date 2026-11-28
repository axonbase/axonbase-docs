import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ReleaseNotice() {
  const { t } = useTranslation();
  return (
    <aside className="release-notice">
      <span>{t("notice_text")}</span>
      <Link to="/limitations">{t("notice_link")} →</Link>
    </aside>
  );
}
