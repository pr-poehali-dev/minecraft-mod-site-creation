import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const CATEGORIES = ['Все', 'Оружие', 'Магия', 'Техника', 'Декор', 'Мобы'];
const VERSIONS = ['Все версии', '1.20.x', '1.19.x', '1.18.x', '1.16.x'];

interface Mod {
  id: number;
  name: string;
  description: string;
  category: string;
  version: string;
  downloads: string;
  image: string;
}

const MODS: Mod[] = [
  {
    id: 1,
    name: 'Enhanced Weapons',
    description: 'Добавляет новые мечи, топоры и луки с уникальными способностями',
    category: 'Оружие',
    version: '1.20.x',
    downloads: '1.2M',
    image: 'https://cdn.poehali.dev/projects/52536111-119d-4c46-aa8d-fc6574ec136b/files/ee814279-5ff5-478f-9e7d-302fcbe820ee.jpg'
  },
  {
    id: 2,
    name: 'Magic Spells',
    description: 'Система магии с заклинаниями огня, льда и молний',
    category: 'Магия',
    version: '1.20.x',
    downloads: '980K',
    image: 'https://cdn.poehali.dev/projects/52536111-119d-4c46-aa8d-fc6574ec136b/files/32bb3f26-451d-44d9-a916-cad8d942ab84.jpg'
  },
  {
    id: 3,
    name: 'Industrial Craft',
    description: 'Машины, генераторы и автоматизация производства',
    category: 'Техника',
    version: '1.19.x',
    downloads: '2.5M',
    image: 'https://cdn.poehali.dev/projects/52536111-119d-4c46-aa8d-fc6574ec136b/files/653f579d-758c-4d13-ad71-b04eed5ec6f8.jpg'
  },
  {
    id: 4,
    name: 'Better Mobs',
    description: 'Улучшенный ИИ мобов и новые существа',
    category: 'Мобы',
    version: '1.20.x',
    downloads: '750K',
    image: 'https://cdn.poehali.dev/projects/52536111-119d-4c46-aa8d-fc6574ec136b/files/ee814279-5ff5-478f-9e7d-302fcbe820ee.jpg'
  },
  {
    id: 5,
    name: 'Decoration Plus',
    description: 'Сотни новых блоков для строительства и декора',
    category: 'Декор',
    version: '1.20.x',
    downloads: '1.8M',
    image: 'https://cdn.poehali.dev/projects/52536111-119d-4c46-aa8d-fc6574ec136b/files/32bb3f26-451d-44d9-a916-cad8d942ab84.jpg'
  },
  {
    id: 6,
    name: 'Fire Magic',
    description: 'Огненная магия с взрывами и лавовыми заклинаниями',
    category: 'Магия',
    version: '1.18.x',
    downloads: '620K',
    image: 'https://cdn.poehali.dev/projects/52536111-119d-4c46-aa8d-fc6574ec136b/files/32bb3f26-451d-44d9-a916-cad8d942ab84.jpg'
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedVersion, setSelectedVersion] = useState('Все версии');

  const filteredMods = MODS.filter(mod => {
    const matchesSearch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mod.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || mod.category === selectedCategory;
    const matchesVersion = selectedVersion === 'Все версии' || mod.version === selectedVersion;
    return matchesSearch && matchesCategory && matchesVersion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-50">
      <header className="border-b-4 border-secondary bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-sm pixelated box-shadow-pixel"></div>
              <h1 className="text-3xl font-bold text-shadow-pixel">MinecraftMods</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-accent transition-colors font-medium">Главная</a>
              <a href="#mods" className="hover:text-accent transition-colors font-medium">Моды</a>
              <a href="#categories" className="hover:text-accent transition-colors font-medium">Категории</a>
              <a href="#new" className="hover:text-accent transition-colors font-medium">Новинки</a>
              <a href="#install" className="hover:text-accent transition-colors font-medium">Установка</a>
              <a href="#contacts" className="hover:text-accent transition-colors font-medium">Контакты</a>
            </nav>
            <Button variant="secondary" className="box-shadow-pixel">
              <Icon name="Download" size={18} />
              <span className="ml-2">Скачать</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 text-shadow-pixel animate-fade-in">
            🎮 Лучшие моды для Minecraft
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Тысячи модов для расширения игрового опыта
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 box-shadow-pixel text-lg px-8">
              <Icon name="Rocket" size={20} />
              <span className="ml-2">Начать</span>
            </Button>
            <Button size="lg" variant="outline" className="box-shadow-pixel text-lg px-8 bg-white">
              <Icon name="Info" size={20} />
              <span className="ml-2">Как установить</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12" id="mods">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-6 text-shadow-pixel">Найти моды</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-1">
                <div className="relative">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Поиск модов..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 box-shadow-pixel"
                  />
                </div>
              </div>
              
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 box-shadow-pixel">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Select value={selectedVersion} onValueChange={setSelectedVersion}>
                  <SelectTrigger className="h-12 box-shadow-pixel">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {VERSIONS.map(ver => (
                      <SelectItem key={ver} value={ver}>{ver}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.slice(1).map(cat => (
                <Badge
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMods.map((mod, index) => (
              <Card 
                key={mod.id} 
                className="box-shadow-pixel hover:scale-105 transition-transform cursor-pointer animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="h-48 overflow-hidden rounded-t-sm bg-muted">
                    <img 
                      src={mod.image} 
                      alt={mod.name}
                      className="w-full h-full object-cover pixelated"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{mod.name}</CardTitle>
                    <Badge variant="secondary" className="ml-2">{mod.category}</Badge>
                  </div>
                  <CardDescription className="mb-3 text-sm">
                    {mod.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted">
                      <Icon name="Download" size={16} />
                      <span>{mod.downloads}</span>
                    </div>
                    <Badge variant="outline">{mod.version}</Badge>
                  </div>
                  <Button className="w-full mt-4 box-shadow-pixel">
                    <Icon name="Download" size={16} />
                    <span className="ml-2">Скачать мод</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMods.length === 0 && (
            <div className="text-center py-16">
              <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Моды не найдены</p>
              <p className="text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground border-t-4 border-primary mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">MinecraftMods</h4>
              <p className="text-sm opacity-90">Лучшая платформа для поиска и установки модов Minecraft</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Категории</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новинки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Установка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="box-shadow-pixel">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="box-shadow-pixel">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="box-shadow-pixel">
                  <Icon name="Github" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-6 text-center text-sm opacity-80">
            © 2024 MinecraftMods. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}
