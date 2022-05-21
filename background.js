var currentTheme = '';

const themes = {
  'day': {
    images: {
      theme_frame: 'images/waterfalling.gif',
    },
    "properties": {
      "additional_backgrounds_alignment": [
        "right top"
      ],
      "additional_backgrounds_tiling": [
        "repeat"
      ]
    },
    "colors": {
      "toolbar": "rgba(0, 0, 0, 0.39)",
      "toolbar_text": "rgb(186, 199, 238)",
      "frame": "rgb(8, 11, 33)",
      "tab_background_text": "rgb(186, 199, 238)",
      "toolbar_field": "rgb(54, 58, 89)",
      "toolbar_field_text": "rgb(236, 210, 0)",
      "tab_line": "rgb(236, 210, 0)",
      "popup": "rgb(1, 3, 22)",
      "popup_text": "rgb(238, 226, 128)",
      "button_background_active": "rgba(15, 10, 41, 0.23)",
      "button_background_hover": "rgba(56, 52, 75, 0.63)",
      "frame_inactive": "rgba(15, 10, 41, 0.23)",
      "icons_attention": "rgb(61, 30, 199)",
      "icons": "rgb(236, 210, 0)",
      "ntp_background": "rgb(3, 1, 21)",
      "ntp_text": "rgb(236, 210, 0)",
      "popup_border": "rgb(58, 56, 87)",
      "popup_highlight_text": "rgb(236, 210, 0)",
      "popup_highlight": "rgba(56, 52, 75, 0.63)",
      "sidebar_border": "rgb(54, 58, 89)",
      "sidebar_highlight_text": "rgb(186, 199, 238)",
      "sidebar_highlight": "rgba(56, 52, 75, 0.63)",
      "sidebar_text": "rgb(238, 226, 128)",
      "sidebar": "rgb(1, 3, 22)",
      "tab_background_separator": "rgba(30, 28, 94, 0.34)",
      "tab_loading": "rgb(238, 226, 128)",
      "tab_selected": "rgb(4, 7, 34)",
      "tab_text": "rgb(236, 210, 0)",
      "toolbar_bottom_separator": "rgb(1, 3, 22)",
      "toolbar_field_border_focus": "rgb(26, 22, 48)",
      "toolbar_field_border": "rgb(4, 7, 34)",
      "toolbar_field_focus": "rgba(1, 3, 22, 0.9)",
      "toolbar_field_highlight_text": "rgb(236, 210, 0)",
      "toolbar_field_highlight": "rgba(186, 199, 238, 0.34)",
      "toolbar_field_separator": "rgb(1, 3, 22)",
      "toolbar_field_text_focus": "rgb(236, 210, 0)",
      "toolbar_top_separator": "rgb(1, 3, 22)",
      "toolbar_vertical_separator": "rgb(4, 7, 34)"
    }
  },
  'evening': {
    images: {
      theme_frame: 'images/gen-impact.gif',
    },
    "properties": {
      "additional_backgrounds_alignment": [
        "right top"
      ],
      "additional_backgrounds_tiling": [
        "repeat"
      ]
    },
    "colors": {
      "toolbar": "rgba(0, 0, 0, 0.39)",
      "toolbar_text": "rgb(186, 199, 238)",
      "frame": "rgb(8, 11, 33)",
      "tab_background_text": "rgb(186, 199, 238)",
      "toolbar_field": "rgb(54, 58, 89)",
      "toolbar_field_text": "rgb(236, 210, 0)",
      "tab_line": "rgb(236, 210, 0)",
      "popup": "rgb(1, 3, 22)",
      "popup_text": "rgb(238, 226, 128)",
      "button_background_active": "rgba(15, 10, 41, 0.23)",
      "button_background_hover": "rgba(56, 52, 75, 0.63)",
      "frame_inactive": "rgba(15, 10, 41, 0.23)",
      "icons_attention": "rgb(61, 30, 199)",
      "icons": "rgb(236, 210, 0)",
      "ntp_background": "rgb(3, 1, 21)",
      "ntp_text": "rgb(236, 210, 0)",
      "popup_border": "rgb(58, 56, 87)",
      "popup_highlight_text": "rgb(236, 210, 0)",
      "popup_highlight": "rgba(56, 52, 75, 0.63)",
      "sidebar_border": "rgb(54, 58, 89)",
      "sidebar_highlight_text": "rgb(186, 199, 238)",
      "sidebar_highlight": "rgba(56, 52, 75, 0.63)",
      "sidebar_text": "rgb(238, 226, 128)",
      "sidebar": "rgb(1, 3, 22)",
      "tab_background_separator": "rgba(30, 28, 94, 0.34)",
      "tab_loading": "rgb(238, 226, 128)",
      "tab_selected": "rgb(4, 7, 34)",
      "tab_text": "rgb(236, 210, 0)",
      "toolbar_bottom_separator": "rgb(1, 3, 22)",
      "toolbar_field_border_focus": "rgb(26, 22, 48)",
      "toolbar_field_border": "rgb(4, 7, 34)",
      "toolbar_field_focus": "rgba(1, 3, 22, 0.9)",
      "toolbar_field_highlight_text": "rgb(236, 210, 0)",
      "toolbar_field_highlight": "rgba(186, 199, 238, 0.34)",
      "toolbar_field_separator": "rgb(1, 3, 22)",
      "toolbar_field_text_focus": "rgb(236, 210, 0)",
      "toolbar_top_separator": "rgb(1, 3, 22)",
      "toolbar_vertical_separator": "rgb(4, 7, 34)"
    }
  },
  'night': {
    images: {
      theme_frame: 'images/stars.gif',
    },
  "properties": {
      "additional_backgrounds_alignment": [
        "right top"
      ],
      "additional_backgrounds_tiling": [
        "repeat"
      ]
    },
    colors: {
      "toolbar": "rgba(0, 0, 0, 0.39)",
      "toolbar_text": "rgb(186, 199, 238)",
      "frame": "rgb(8, 11, 33)",
      "tab_background_text": "rgb(186, 199, 238)",
      "toolbar_field": "rgb(54, 58, 89)",
      "toolbar_field_text": "rgb(236, 210, 0)",
      "tab_line": "rgb(111, 83, 237)",
      "popup": "rgb(1, 3, 22)",
      "popup_text": "rgb(238, 226, 128)",
      "button_background_active": "rgba(15, 10, 41, 0.23)",
      "button_background_hover": "rgba(56, 52, 75, 0.63)",
      "frame_inactive": "rgba(15, 10, 41, 0.23)",
      "icons_attention": "rgb(250, 120, 127)",
      "icons": "rgb(113, 74, 240)",
      "ntp_background": "rgb(3, 1, 21)",
      "ntp_text": "rgb(236, 210, 0)",
      "popup_border": "rgb(58, 56, 87)",
      "popup_highlight_text": "rgb(236, 210, 0)",
      "popup_highlight": "rgba(56, 52, 75, 0.63)",
      "sidebar_border": "rgb(54, 58, 89)",
      "sidebar_highlight_text": "rgb(186, 199, 238)",
      "sidebar_highlight": "rgba(56, 52, 75, 0.63)",
      "sidebar_text": "rgb(238, 226, 128)",
      "sidebar": "rgb(1, 3, 22)",
      "tab_background_separator": "rgba(30, 28, 94, 0.34)",
      "tab_loading": "rgb(238, 226, 128)",
      "tab_selected": "rgb(4, 7, 34)",
      "tab_text": "rgb(236, 210, 0)",
      "toolbar_bottom_separator": "rgb(1, 3, 22)",
      "toolbar_field_border_focus": "rgb(26, 22, 48)",
      "toolbar_field_border": "rgb(4, 7, 34)",
      "toolbar_field_focus": "rgba(1, 3, 22, 0.9)",
      "toolbar_field_highlight_text": "rgb(236, 210, 0)",
      "toolbar_field_highlight": "rgba(186, 199, 238, 0.34)",
      "toolbar_field_separator": "rgb(1, 3, 22)",
      "toolbar_field_text_focus": "rgb(236, 210, 0)",
      "toolbar_top_separator": "rgb(1, 3, 22)",
      "toolbar_vertical_separator": "rgb(4, 7, 34)"
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  // Will set the sun theme between 8am and 1pm.
  if ((hours >= 8) && (hours <= 13)) {
    setTheme('day');
  // Will set the sun theme between 2pm and 4pm.
  } else if ((hours >= 14) && (hours <= 16)) {
    setTheme('evening');
// Will set the sun theme between 5pm and 7am.
  } else {
    setTheme('night');
  }
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});