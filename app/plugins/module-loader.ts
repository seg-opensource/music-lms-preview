export default defineNuxtPlugin(() => {
  const modules = import.meta.glob('~/modules/*/index.ts', { eager: true })

  const loaded = Object.entries(modules).map(([path, mod]) => {
    const name = path.split('/')[2]
    const meta = mod.default?.meta || {}

    return { name, meta, module: mod }
  })

  return {
    provide: {
      modules: loaded
    }
  }
})
