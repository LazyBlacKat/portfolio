import {SkillData} from '../models/skills.model';

export const DATA: SkillData = {
  "subtitle": "The skills and values that drive my development process",
  "categories": [
    {
      "id": "frontend",
      "label": "Frontend",
      "color": "#6c5ce7"
    },
    {
      "id": "tools",
      "label": "Tools & Tech Stack",
      "color": "#00b894"
    },
    {
      "id": "soft",
      "label": "Soft Skills",
      "color": "#fdcb6e"
    }
  ],
  "skills": [
    {
      "id": "frontend",
      "name": "Frontend",
      "category": "frontend",
      "level": 4,
      "children": [
        {
          "id": "framework",
          "name": "Framework",
          "category": "frontend",
          "level": 4,
          "children": [
            {
              "id": "child1",
              "name": "Skill1",
              "category": "frontend",
              "level": 3
            },
            {
              "id": "child2",
              "name": "Skill2",
              "category": "frontend",
              "level": 3
            },
            {
              "id": "child3",
              "name": "Skill3",
              "category": "frontend",
              "level": 3
            }
          ]
        },
        {
          "id": "languages",
          "name": "Languages",
          "category": "frontend",
          "level": 3,
          "children": [
            {
              "id": "child1",
              "name": "Language1",
              "category": "frontend",
              "level": 3
            },
            {
              "id": "child2",
              "name": "Language2",
              "category": "frontend",
              "level": 2
            },
            {
              "id": "child3",
              "name": "Language3",
              "category": "frontend",
              "level": 3
            },
            {
              "id": "child4",
              "name": "Language4",
              "category": "frontend",
              "level": 3
            }
          ]
        }
      ]
    },
    {
      "id": "tools",
      "name": "Tech Stack & Tools",
      "category": "tools",
      "level": 4,
      "children": [
        {
          "id": "tools",
          "name": "Tools",
          "category": "tools",
          "level": 4,
          "children": [
            {
              "id": "child1",
              "name": "Tool1",
              "category": "tools",
              "level": 4
            },
            {
              "id": "child2",
              "name": "Tool2",
              "category": "tools",
              "level": 3
            },
            {
              "id": "child3",
              "name": "Tool3",
              "category": "tools",
              "level": 1
            }
          ]
        }
      ]
    },
    {
      "id": "soft",
      "name": "Soft Skills",
      "category": "soft",
      "level": 4,
      "children": [
        {
          "id": "values",
          "name": "Values",
          "category": "soft",
          "level": 5,
          "children": [
            {
              "id": "child1",
              "name": "Skill1",
              "category": "soft",
              "level": 5
            },
            {
              "id": "child2",
              "name": "Skill2",
              "category": "soft",
              "level": 5
            },
            {
              "id": "child3",
              "name": "Skill3",
              "category": "soft",
              "level": 5
            }
          ]
        },
        {
          "id": "personality",
          "name": "Soft Skills",
          "category": "soft",
          "level": 4,
          "children": [
            {
              "id": "child1",
              "name": "SoftSkill1",
              "category": "soft",
              "level": 4
            },
            {
              "id": "child2",
              "name": "SoftSkill2",
              "category": "soft",
              "level": 5
            },
            {
              "id": "child3",
              "name": "SoftSkill3",
              "category": "soft",
              "level": 5
            },
            {
              "id": "child4",
              "name": "SoftSkill4",
              "category": "soft",
              "level": 2
            },
            {
              "id": "child5",
              "name": "SoftSkill5",
              "category": "soft",
              "level": 3
            }
          ]
        }
      ]
    }
  ]
}
