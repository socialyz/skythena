import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true },
  ar: { label: 'العربية', dir: 'rtl', active: false },
  fr: { label: 'Français', dir: 'ltr', active: false },
};

const LanguageSelect = () => {
  const selected = localStorage.getItem('i18nextLng') || 'en';
  const { t } = useTranslation();

  const [menuAnchor, setMenuAnchor] = React.useState(null);
  React.useEffect(() => {
    document.body.dir = languageMap[selected].dir;
  }, [menuAnchor, selected]);

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {/* console.log(item), */}
        {/* {languageMap[selected].label} */}
        {/* <ArrowDropDown fontSize="small" /> */}
      </button>
      <div
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div>
          <ul>
            <li>{t('select_language')}</li>
            {Object.keys(languageMap)?.map((item) => (
              <li
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
