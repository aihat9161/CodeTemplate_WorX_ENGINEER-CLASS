//各種page.tsxへの組み込みを想定

"use client";

export default function EmbedExamples() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">埋め込みコンテンツの例</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">📍 Google Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.907690516146!2d139.700733915258!3d35.68948738019179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd2a9a2e0db%3A0x7db3145dc74a2db5!2z5p2x5Lqs6YO95paw5a6_!5e0!3m2!1sja!2sjp!4v1587972842155!5m2!1sja!2sjp"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">X ポスト</h2>
        <blockquote className="twitter-tweet">
          <a href="https://twitter.com/elonmusk/status/1234567890123456789"></a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </section>
    </div>
  );
}
