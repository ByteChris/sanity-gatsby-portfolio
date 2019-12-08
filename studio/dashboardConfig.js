export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ded63dcfb9d9216d5764b4c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9hr61xz6',
                  apiId: 'd03a505b-0d5c-406b-b1ab-1cc10212a0b0'
                },
                {
                  buildHookId: '5ded63dcd6a5479b024b3792',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8gvu8gzz',
                  apiId: 'b6a050be-a2f0-4603-9926-cef59ac33d7b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ByteChris/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8gvu8gzz.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
