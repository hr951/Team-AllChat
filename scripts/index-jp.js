import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((ev) => {
    const { message, sender } = ev;

    const Dictionary = {
      'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
      'shi': 'し', 'chi': 'ち', 'tsu': 'つ', 'fu': 'ふ', 'ji': 'じ', 'ja': 'じゃ', 'jo': 'じょ',
      'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
      'sa': 'さ', 'si': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
      'ta': 'た', 'ti': 'ち', 'tu': 'つ', 'te': 'て', 'to': 'と',
      'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
      'ha': 'は', 'hi': 'ひ', 'hu': 'ふ', 'he': 'へ', 'ho': 'ほ',
      'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
      'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
      'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
      'wa': 'わ', 'wi': 'うぃ', 'wu': 'う', 'we': 'うぇ', 'wo': 'を',
      'nn': 'ん', 'vu': 'ヴ',
      'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご',
      'za': 'ざ', 'zi': 'じ', 'zu': 'ず', 'ze': 'ぜ', 'zo': 'ぞ',
      'da': 'だ', 'di': 'ぢ', 'du': 'づ', 'de': 'で', 'do': 'ど',
      'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
      'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ',
      'kya': 'きゃ', 'kyi': 'きぃ', 'kyu': 'きゅ', 'kye': 'きぇ', 'kyo': 'きょ',
      'sya': 'しゃ', 'syi': 'しぃ', 'syu': 'しゅ', 'sye': 'しぇ', 'syo': 'しょ', 
      'sha': 'しゃ', 'shi': 'し', 'shu': 'しゅ', 'she': 'しぇ', 'sho': 'しょ',
      'tya': 'ちゃ', 'tyi': 'ちぃ', 'tyu': 'ちゅ', 'tye': 'ちぇ', 'tyo': 'ちょ',
      'nya': 'にゃ', 'nyi': 'にぃ', 'nyu': 'にゅ', 'nye': 'にぇ', 'nyo': 'にょ',
      'hya': 'ひゃ', 'hyi': 'ひぃ', 'hyu': 'ひゅ', 'hye': 'ひぇ', 'hyo': 'ひょ',
      'mya': 'みゃ', 'myi': 'みぃ', 'myu': 'みゅ', 'mye': 'みぇ', 'myo': 'みょ',
      'rya': 'りゃ', 'ryi': 'りぃ', 'ryu': 'りゅ', 'rye': 'りぇ', 'ryo': 'りょ',
      'fa': 'ふぁ', 'fi': 'ふぃ', 'fe': 'ふぇ', 'fo': 'ふぉ',
      'gya': 'ぎゃ', 'gyi': 'ぎぃ', 'gyu': 'ぎゅ', 'gye': 'ぎゃ', 'gyo': 'ぎょ',
      'zya': 'じゃ', 'zyi': 'じぃ', 'zyu': 'じゅ', 'zye': 'じぇ', 'zyo': 'じょ',
      'dya': 'ぢゃ', 'dyi': 'ぢぃ', 'dyu': 'ぢゅ', 'dye': 'ぢぇ', 'dyo': 'ぢょ',
      'bya': 'びゃ', 'byi': 'びぃ', 'byu': 'びゅ', 'bye': 'びぇ', 'byo': 'びょ',
      'pya': 'ぴゃ', 'pyi': 'ぴぃ', 'pyu': 'ぴゅ', 'pye': 'ぴぇ', 'pyo': 'ぴょ',
      'k':'っ', 's':'っ', 't':'っ', 'n':'っ', 'h':'っ', 'm':'っ', 'y':'っ', 'r':'っ', 'w':'っ', 
      'g':'っ', 'z':'っ', 'd':'っ', 'b':'っ', 'p':'っ', 'f':'っ', 'j':'っ', 'c':'っ', 'l':'っ',
      '-':'ー', '!':'！', '?':'？', '[':'（', ']':'）', '~':'～', '@':'＠', ',':'、', '.':'。',
    };

    if (message.startsWith("!")) {
        ev.cancel = true;

            const args = message.slice(1).split(" ");
                world.sendMessage(`[ALL] §r<${sender.name}> ${args[0]} §6（${convert(args[0])}）`)
                return;
    } else {
    for (const player of world.getPlayers()) {
        ev.cancel = true;
        if(sender.hasTag("A")) {
            if (player.hasTag("A")) {
                player.sendMessage(`[TEAM] §r<${sender.name}> ${message} §6（${convert(message)}）`);
            }
             } else if(sender.hasTag("B")) {
                if (player.hasTag("B")) {
                player.sendMessage(`[TEAM] §r<${sender.name}> ${message} §6（${convert(message)}）`);
                }
             } else if(sender.hasTag("C")) {
                if (player.hasTag("C")) {
                player.sendMessage(`[TEAM] §r<${sender.name}> ${message} §6（${convert(message)}）`);
                }
             } else if(sender.hasTag("D")) {
                if (player.hasTag("D")) {
                player.sendMessage(`[TEAM] §r<${sender.name}> ${message} §6（${convert(message)}）`);
                }
             } else {
                player.sendMessage(`[NoTag] §r<${sender.name}> ${message} §6（${convert(message)}）`)
             }
    }
}
  function convert(romaji) {
    const keys = Object.keys(Dictionary).sort((a, b) => b.length - a.length);
    let hiragana = '';
    let i = 0;
    while (i < romaji.length) {
      let matched = false;
      for (const key of keys) {
        if (romaji.startsWith(key, i)) {
          hiragana += Dictionary[key];
          i += key.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        hiragana += romaji[i];
        i++;
      }
    }
    return hiragana;
  }
});
