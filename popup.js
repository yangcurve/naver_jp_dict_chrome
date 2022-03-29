chrome.tabs.query({ active: true, currentWindow: true }, ([{ id }]) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: id },
      function: () => window.getSelection().toString(),
    },
    ([{ result }]) => {
      const iframe = document.getElementById('iframe')
      const src = 'https://ja.dict.naver.com/#/mini'

      if (!result) iframe.src = `${src}/main`
      else iframe.src = `${src}/search?query=${result}`
    }
  )
})
