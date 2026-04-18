(function () {
  function isDebugEnabled() {
    try {
      const qs = new URLSearchParams(window.location.search);
      if (qs.get("yobDebug") === "1") return true;
      return window.localStorage.getItem("yobDebug") === "1";
    } catch (e) {
      return false;
    }
  }

  function setDebugEnabled(enabled) {
    try {
      window.localStorage.setItem("yobDebug", enabled ? "1" : "0");
    } catch (e) {
      // no-op when storage is unavailable
    }
  }

  function encodeFormData(form) {
    return new URLSearchParams(new FormData(form)).toString();
  }

  async function submitNetlifyForm(form, options) {
    const config = options || {};
    const endpoint = config.endpoint || "/";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData(form),
    });

    if (!response.ok) {
      throw new Error("Form submit failed");
    }

    return response;
  }

  function track(eventName, payload) {
    const detail = {
      event: eventName,
      payload: payload || {},
      timestamp: Date.now(),
      page: location.pathname,
    };

    try {
      window.dispatchEvent(new CustomEvent("yob:analytics", { detail: detail }));
    } catch (e) {
      // no-op on older browsers
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(detail);
    }

    if (isDebugEnabled() && window.console && window.console.info) {
      window.console.info("[YOB analytics]", detail);
    }
  }

  window.YOBFormUtils = {
    encodeFormData: encodeFormData,
    submitNetlifyForm: submitNetlifyForm,
    track: track,
    isDebugEnabled: isDebugEnabled,
    setDebugEnabled: setDebugEnabled,
  };
})();
