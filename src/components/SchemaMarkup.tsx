export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zenith Innovations",
    description: "Full-service digital agency offering custom software development, web development, and comprehensive digital marketing solutions.",
    url: "https://zenithinnovations.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@zenith.com"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business St",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "US"
    },
    sameAs: [
      "https://www.linkedin.com/company/zenith-innovations",
      "https://twitter.com/zenithinno"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zenith Innovations",
    url: "https://zenithinnovations.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://zenithinnovations.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  )
}