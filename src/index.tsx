import { Injector, Logger, common, components, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
import { registerSettings } from "./Components/Settings";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("ReGameActivityToggle");
export const SettingValues = await settings.init("Tharki.ReGameActivityToggle", defaultSettings);
export const { toast: Toasts } = common;
export const { ContextMenu } = components;
export const CurrentlyPressed = new Map();
import { applyInjections } from "./patches/index";
import { addListeners, removeListeners } from "./listeners/index";

export const start = (): void => {
  registerSettings();
  applyInjections();
  addListeners();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  removeListeners();
};
export { Settings } from "./Components/Settings.jsx";
