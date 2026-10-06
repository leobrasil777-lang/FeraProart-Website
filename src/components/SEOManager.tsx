import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.feraproart.com.br'
const SITE_NAME = 'Fera Proart'
const NOT_FOUND_TITLE = 'Página não encontrada | Fera Proart'

const ORGANIZATION_SCHEMA_ID = 'fera-proart-organization-schema'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo-feraproart.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55 15 99799-2549',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
}

interface SEOConfig {
  title: string
  description: string
}

const seoByPath: Record<string, SEOConfig> = {
  '/': {
    title: 'Fera Proart | Uniformes e Artigos para Bandas e Fanfarras',
    description:
      'Uniformes, calçados, acessórios, quépes e barretinas para bandas, fanfarras e corporações. Conheça a Fera Proart e solicite seu orçamento.',
  },

  '/idealizador': {
    title: 'Fernando Rabelo, Idealizador da Fera Proart',
    description:
      'Conheça a trajetória do maestro Fernando Rabelo, idealizador da Fera Proart, e a experiência por trás de produtos criados para quem vive a música.',
  },

  '/uniformes': {
    title: 'Uniformes para Bandas e Fanfarras | Fera Proart',
    description:
      'Uniformes personalizados para bandas, fanfarras, balizas, linhas de frente e corpos coreográficos, com identidade visual e acabamento Fera Proart.',
  },

  '/calcados': {
    title: 'Calçados para Bandas e Fanfarras | Fera Proart',
    description:
      'Calçados para bandas, fanfarras e corporações, desenvolvidos para apresentação, conforto e identidade. Conheça os modelos da Fera Proart.',
  },

  '/acessorios': {
    title: 'Acessórios para Bandas e Fanfarras | Fera Proart',
    description:
      'Acessórios para bandas e linhas de frente, incluindo bolas, fitas, maças, cordas, arcos, bandeiras, estandartes, Airblade e outros itens.',
  },

  '/barretinas-e-quepes': {
    title: 'Quépes e Barretinas para Bandas | Fera Proart',
    description:
      'Quépes e barretinas para bandas, fanfarras e corporações, com modelos e acabamentos desenvolvidos para compor a identidade de cada grupo.',
  },

  '/licitacao': {
    title: 'Licitações para Bandas e Fanfarras | Fera Proart',
    description:
      'Soluções da Fera Proart para órgãos públicos e processos de licitação de uniformes, calçados, acessórios, quépes e barretinas para bandas.',
  },
}

function setMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function removeMeta(attribute: 'name' | 'property', key: string) {
  document.head
    .querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
    ?.remove()
}

function setOrganizationSchema() {
  let script = document.head.querySelector<HTMLScriptElement>(
    `#${ORGANIZATION_SCHEMA_ID}`,
  )

  if (!script) {
    script = document.createElement('script')
    script.id = ORGANIZATION_SCHEMA_ID
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(organizationSchema)
}

function removeOrganizationSchema() {
  document.head.querySelector(`#${ORGANIZATION_SCHEMA_ID}`)?.remove()
}

function SEOManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath =
      pathname !== '/' ? pathname.replace(/\/+$/, '') : '/'

    const seo = seoByPath[normalizedPath]

    if (!seo) {
      document.title = NOT_FOUND_TITLE

      setMeta('name', 'robots', 'noindex, follow')
      removeMeta('name', 'description')
      removeMeta('property', 'og:title')
      removeMeta('property', 'og:description')
      removeMeta('property', 'og:url')
      document.head.querySelector('link[rel="canonical"]')?.remove()

      removeOrganizationSchema()

      return
    }

    const canonicalUrl =
      normalizedPath === '/'
        ? `${SITE_URL}/`
        : `${SITE_URL}${normalizedPath}`

    document.title = seo.title

    removeMeta('name', 'robots')
    setMeta('name', 'description', seo.description)

    setMeta('property', 'og:title', seo.title)
    setMeta('property', 'og:description', seo.description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:locale', 'pt_BR')

    let canonical =
      document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalUrl)

    if (normalizedPath === '/') {
      setOrganizationSchema()
    } else {
      removeOrganizationSchema()
    }
  }, [pathname])

  return null
}

export default SEOManager