// Resolves all relational fields on type Project
// where the name of the function is an exact match to the field

const product = (parent, args, context) => {
  const res = context.prisma.project({ id: parent.id }).product();

  return res;
};

const team = (parent, args, context) => {
  const res = context.prisma.project({ id: parent.id }).team();

  return res;
};

const projectManagers = (parent, args, context) => {
  const res = context.prisma.project({ id: parent.id }).projectManagers();

  return res;
};

const notes = (parent, args, context) => {
  const { id } = parent;
  const { orderBy } = args;
  const res = context.prisma.project({ id }).notes({ orderBy });

  return res;
};

const projectStatus = (parent, args, context) => {
  const res = context.prisma.project({ id: parent.id }).projectStatus();

  return res;
};

const projectHealth = (parent, args, context) => {
  const res = context.prisma.project({ id: parent.id }).projectHealth();

  return res;
};

module.exports = {
  product,
  team,
  projectManagers,
  notes,
  projectStatus,
  projectHealth,
};
