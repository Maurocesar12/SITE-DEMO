import { Contrast, Eye, Minus, Plus, RotateCcw, SlidersHorizontal, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type TextScale = "normal" | "large" | "xl";

type ViewSettings = {
  textScale: TextScale;
  highContrast: boolean;
  calmMotion: boolean;
  focusMode: boolean;
};

const storageKey = "agnes:view-settings";

const defaultSettings: ViewSettings = {
  textScale: "normal",
  highContrast: false,
  calmMotion: false,
  focusMode: false
};

const textScaleOrder: TextScale[] = ["normal", "large", "xl"];

function readStoredSettings(): ViewSettings {
  try {
    const rawSettings = window.localStorage.getItem(storageKey);

    if (!rawSettings) {
      return defaultSettings;
    }

    return { ...defaultSettings, ...JSON.parse(rawSettings) };
  } catch {
    return defaultSettings;
  }
}

function getNextTextScale(currentScale: TextScale, direction: "up" | "down") {
  const currentIndex = textScaleOrder.indexOf(currentScale);
  const nextIndex = direction === "up" ? currentIndex + 1 : currentIndex - 1;
  const safeIndex = Math.min(Math.max(nextIndex, 0), textScaleOrder.length - 1);

  return textScaleOrder[safeIndex];
}

export function AdvancedViewControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<ViewSettings>(() => readStoredSettings());

  const activeSettingsCount = useMemo(
    () =>
      Number(settings.highContrast) +
      Number(settings.calmMotion) +
      Number(settings.focusMode) +
      Number(settings.textScale !== "normal"),
    [settings]
  );

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.viewText = settings.textScale;
    root.dataset.viewContrast = settings.highContrast ? "high" : "normal";
    root.dataset.viewMotion = settings.calmMotion ? "calm" : "default";
    root.dataset.viewFocus = settings.focusMode ? "on" : "off";

    window.localStorage.setItem(storageKey, JSON.stringify(settings));
  }, [settings]);

  const updateSetting = <Key extends keyof ViewSettings>(key: Key, value: ViewSettings[Key]) => {
    setSettings((currentSettings) => ({ ...currentSettings, [key]: value }));
  };

  const resetSettings = () => setSettings(defaultSettings);

  return (
    <aside
      aria-label="Controles avancados de visualizacao"
      className="fixed bottom-4 right-4 z-[65] w-[min(calc(100vw-2rem),23rem)] text-ink"
    >
      {isOpen && (
        <div className="mb-3 overflow-hidden rounded-2xl border border-ink/12 bg-white/96 shadow-soft backdrop-blur-xl">
          <div className="flex items-start justify-between gap-4 border-b border-ink/10 p-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-wine">Visualizacao</p>
              <h2 className="mt-1 font-display text-3xl leading-none">Modos avancados</h2>
            </div>
            <button
              aria-label="Restaurar visualizacao padrao"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/70 transition hover:bg-porcelain hover:text-ink"
              onClick={resetSettings}
              type="button"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-3 p-4">
            <div className="rounded-2xl bg-porcelain p-3">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-black text-ink/70">
                  <Eye className="h-4 w-4 text-wine" />
                  Tamanho do texto
                </span>
                <span className="text-xs font-black uppercase tracking-[0.12em] text-ink/42">
                  {settings.textScale}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-4 text-sm font-black text-ink/70 transition hover:text-ink"
                  onClick={() => updateSetting("textScale", getNextTextScale(settings.textScale, "down"))}
                  type="button"
                >
                  <Minus className="h-4 w-4" />
                  Menor
                </button>
                <button
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-4 text-sm font-black text-white transition hover:bg-wine"
                  onClick={() => updateSetting("textScale", getNextTextScale(settings.textScale, "up"))}
                  type="button"
                >
                  <Plus className="h-4 w-4" />
                  Maior
                </button>
              </div>
            </div>

            <button
              aria-pressed={settings.highContrast}
              className={settings.highContrast ? "view-control-button is-active" : "view-control-button"}
              onClick={() => updateSetting("highContrast", !settings.highContrast)}
              type="button"
            >
              <Contrast className="h-5 w-5" />
              Alto contraste
            </button>
            <button
              aria-pressed={settings.calmMotion}
              className={settings.calmMotion ? "view-control-button is-active" : "view-control-button"}
              onClick={() => updateSetting("calmMotion", !settings.calmMotion)}
              type="button"
            >
              <Sparkles className="h-5 w-5" />
              Movimento suave
            </button>
            <button
              aria-pressed={settings.focusMode}
              className={settings.focusMode ? "view-control-button is-active" : "view-control-button"}
              onClick={() => updateSetting("focusMode", !settings.focusMode)}
              type="button"
            >
              <SlidersHorizontal className="h-5 w-5" />
              Modo leitura
            </button>
          </div>
        </div>
      )}

      <button
        aria-expanded={isOpen}
        className="ml-auto flex min-h-12 items-center gap-3 rounded-full bg-ink px-5 font-black text-white shadow-soft transition hover:bg-wine"
        onClick={() => setIsOpen((currentState) => !currentState)}
        type="button"
      >
        <SlidersHorizontal className="h-5 w-5" />
        Ajustes
        {activeSettingsCount > 0 && (
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-xs text-ink">
            {activeSettingsCount}
          </span>
        )}
      </button>
    </aside>
  );
}
