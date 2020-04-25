export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea40d95a4028de65c38c6ce',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-itabwk9a',
                  apiId: '69df5231-64a5-4334-82fd-130c06d52516'
                },
                {
                  buildHookId: '5ea40d95d4cde262ec69ceca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vm2xcgi4',
                  apiId: 'dfe1c64f-66e4-4e4f-bfce-bf18bbb789f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DaanDD/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vm2xcgi4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
